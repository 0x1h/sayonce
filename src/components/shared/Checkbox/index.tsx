export const Checkbox = ({ onClick }: { onClick?: () => void }) => (
  <div className="checkbox-wrapper-12" onClick={onClick}>
    <div className="cbx">
      <input id="cbx-12" type="checkbox" />
      <label htmlFor="cbx-12" />
      <svg width="8" height="8" viewBox="0 0 15 14" fill="none">
        <path d="M2 8.36364L6.23077 12L13 2" />
      </svg>
    </div>
  </div>
);
