import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

export const SearchBar = ({
  onChange,
  placeholder,
  value,
  onSubmit,
}: {
  onChange: (text: string) => void;
  placeholder: string;
  value: string;
  onSubmit: () => void;
}) => {
  const handleChangeText = (event: any) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="search-bar"
        className="text"
        onChange={handleChangeText}
        value={value}
        label={placeholder}
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton aria-label="search" onClick={handleSubmit}>
        🔎
      </IconButton>
    </form>
  );
};
