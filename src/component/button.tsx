import { Children } from "react";

interface Props {
  children: string;
  onClick: () => void;
}

function button({ children, onClick }: Props) {
  return (
    <>
      <button type="button" onClick={onClick} className="btn  btn-primary">
        {children}
      </button>
    </>
  );
}
export default button;
