import React, { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import { frontService } from "../../_services/front.services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { userData } from "../../store/actions/index";
import Link from "next/link";

function OtpModal({ show, handleShow, handleClose }) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [mainOtp, setMainotp] = React.useState(false);
  const [dataMb, setDataMb] = React.useState([]);
  const [sending, setSending] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    setSending(true);
    frontService.sendOtpcode(data).then(
      (res) => {
        if (res.status == "success") {
          localStorage.setItem("phonenumber", data.phone);
          setMainotp(true);
          reset();
          setDataMb(res.mb);
          // toast.success(res.message, {
          //   position: 'top-right',
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: 'light',
          // });
        } else if (res.status == "fail") {
          toast.warning(res.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.warning("Invalid", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        setSending(false);
      },
      (error) => {
        toast.error("Invalid", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSending(false);
      }
    );
  };
  const onOtp = (data) => {
    //console.log(dataMb.otp)
    //console.log(data.otp);
    setSending(true);
    if (parseInt(data.otp) === parseInt(dataMb.otp)) {
      const dat = {
        mobile: dataMb.mobile,
      };
      frontService.sendOtpverify(dat).then(
        (res) => {
          if (res.status === "success") {
            //console.log(res.user);
            localStorage.setItem("gluserDetails", JSON.stringify(res.user));
            dispatch(userData(res.user));
            handleClose();
            reset();
            // toast.success(res.message, {
            //   position: 'top-left',
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: 'light',
            // });

            localStorage.getItem("page")
              ? Router.push("/checkout")
              : Router.push("/");
          } else if (res.status === "fail") {
            toast.warning(res.message, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.warning("Invalid", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          setSending(false);
        },
        (error) => {
          toast.warning("Invalid", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setSending(false);
        }
      );
    } else {
      toast.error("Wrong OTP", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // frontService.sendOtpverify(data)
    //     .then(
    //         res => {

    //             if (res.status === 'success') {
    //                 console.log(res.user);
    //                 reset();
    //                 toast(res.message, {
    //                     position: "bottom-center",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                 });
    //             } else if (res.status === 'fail') {
    //                 toast(res.message, {
    //                     position: "bottom-center",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                 });

    //             } else {
    //                 toast('Invalid', {
    //                     position: "bottom-center",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "light",
    //                 });

    //             }
    //         }, error => {

    //             toast('Invalid', {
    //                 position: "bottom-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //             });

    //         }
    //     )
  };

  return (
    <div className="otpModal">
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <div className="section-login-background">
          <div className="section-model-login">
            <div className="headsecftion">
              <img
                className="imagelogo"
                src="https://admin.glamcode.in/img/fav.png"
                alt="Glamcode"
              />
            </div>
            <div className="bottomsecftion">
              {mainOtp ? (
                <form onSubmit={handleSubmit(onOtp)}>
                  <input
                    className="inputField"
                    placeholder="Otp"
                    defaultValue=""
                    maxLength={4}
                    {...register("otp", {
                      required: "Otp is Required",
                    })}
                    onKeyUp={() => {
                      trigger("otp");
                    }}
                  />

                  {errors.otp && (
                    <span style={{ marginLeft: "58px", color: "red" }}>
                      {errors.otp.message}
                    </span>
                  )}

                  <button className="button" disabled={sending}>
                    Verify
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="inputField"
                    maxLength={10}
                    placeholder="Enter the 10 digit mobile"
                    defaultValue=""
                    {...register("phone", {
                      required: "Phone is Required",
                      pattern: {
                        value:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid Phone No",
                      },
                    })}
                    onKeyUp={() => {
                      trigger("phone");
                    }}
                  />
                  {errors.phone && (
                    <span style={{ marginLeft: "58px", color: "red" }}>
                      {errors.phone.message}
                    </span>
                  )}

                  <button className="button" disabled={sending}>
                    Send OTP
                  </button>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      color: "#fff",
                    }}
                  >
                    <label>
                      <input
                        className="hello"
                        type="checkbox"
                        width={30}
                        height={30}
                      />
                      <Link href="/terms-conditions">
                        <span
                          style={{
                            fontSize: "16px",
                            color: "#000",
                            textDecoration: "underline",
                            marginLeft: "6px",
                          }}
                        >
                          terms-conditions
                        </span>
                      </Link>
                    </label>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default OtpModal;
