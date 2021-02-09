const DisappearToast = () => {
    setTimeout(() => {
      this.setState({
        toastAlert: false,
        message: "Waiting...",
      });
    }, 3250);
  };

  export default DisappearToast;