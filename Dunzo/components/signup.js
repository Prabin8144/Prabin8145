function showOTP(){
    return `<div class="mandatory">
    <div class="red">*</div>
    <div class="grey">Enter the OTP</div>
</div>
<div id="checkOTP">
    <input id="otp1" type="tel">
    <input id="otp2" type="tel">
    <input id="otp3" type="tel">
    <input id="otp4" type="tel">
    <input id="otp5" type="tel">
    <input id="otp6" type="tel">
</div>
<div id="count">
    <div>Resend</div>
    <div id="countdown">
        <div>00:</div>
        <div id="timer">30</div>
    </div>
</div>`;
}

export default showOTP;