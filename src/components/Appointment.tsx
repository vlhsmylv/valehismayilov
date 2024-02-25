const Appointment = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src="https://zcal.co/i/hQTCzchc?embed=1&embedType=iframe"
        loading="lazy"
        style={{
          border: "none",
          minWidth: 320,
          minHeight: 544,
          height: 966,
          width: 1096,
        }}
        id="zcal-invite"
      />
    </div>
  );
};

export default Appointment;
