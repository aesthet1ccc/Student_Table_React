import React, { ReactNode } from "react";

type ToolTipProps = {
  address: string;
  children: ReactNode;
};

const Tooltip: React.FC<ToolTipProps> = ({ address }) => {
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const textRef = React.useRef<HTMLDivElement>(null);

  const checkOverflow = () => {
    const element = textRef.current;
    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  };

  React.useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [address]);

  return (
    <div className="tooltip-wrapper">
      <div ref={textRef} className="ellipsis-text">
        {address}
      </div>
      {isOverflowing && <div className="tooltip-box">{address}</div>}
    </div>
  );
};

export default Tooltip;
