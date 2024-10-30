import "./loadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className="flex size-full items-center justify-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50%"
        height="50%"
        fill="#e5e7eb"
        className="bg-gray- w-80"
      >
        <rect className="spinner_jCIR" x="1" y="6" width="2.8" height="12" />
        <rect
          className="spinner_jCIR spinner_upm8"
          x="5.8"
          y="6"
          width="2.8"
          height="12"
        />
        <rect
          className="spinner_jCIR spinner_2eL5"
          x="10.6"
          y="6"
          width="2.8"
          height="12"
        />
        <rect
          className="spinner_jCIR spinner_Rp9l"
          x="15.4"
          y="6"
          width="2.8"
          height="12"
        />
        <rect
          className="spinner_jCIR spinner_dy3W"
          x="20.2"
          y="6"
          width="2.8"
          height="12"
        />
      </svg>
    </div>
  );
}
