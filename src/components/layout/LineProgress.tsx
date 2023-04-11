export default function LineProgress(/* prop: {
  percentage: number;
  hight: number;
} */) {
  return (
    <>
      <div className="LineProgress">
        <div className="LineProgress__progress" />
      </div>
    </>
  );
}
