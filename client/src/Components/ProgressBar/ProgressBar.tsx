interface ProgressBarProps {
  val: number;
  totalVal: number;
}

const ProgressBar = ({ val, totalVal }: ProgressBarProps) => {
  // Calculate the percentage
  const percentage = (val / totalVal) * 100;

  return (
    <div
      style={{
        backgroundColor: "rgba(1, 1, 1, 0.2)",
        borderRadius: "5px",
        height: "2px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: "rgba(168, 197, 218, 1)",
          height: "100%",
          borderRadius: "2px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
