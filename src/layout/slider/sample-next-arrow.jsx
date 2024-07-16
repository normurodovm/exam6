export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#333",borderRadius:"50%",}}
        onClick={onClick}
      />
    );
  }