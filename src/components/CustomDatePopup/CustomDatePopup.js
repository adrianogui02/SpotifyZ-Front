import React from "react";
import "./CustomDatePopup.css"; // Importe o arquivo de estilos CSS
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

function CustomDatePopup({ inputdatein, inputdateout, onInputChangeIn, onInputChangeOut, onClose }) {
  return (
    <div className="overlay">
      <div className="custom-popup">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
    <div className="button-container">
        <button className="button-popup" onClick={onClose}>Buscar</button>
    </div>
</div>

    </div>
  );
}

export default CustomDatePopup;
