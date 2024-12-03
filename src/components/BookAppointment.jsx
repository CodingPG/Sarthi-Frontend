import React, { useState } from 'react';
import axios from "axios";

const TimeSlotPicker = () => {
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = 9 + i;
    const display = `${hour <= 12 ? hour : hour - 12} ${hour < 12 ? 'AM' : 'PM'}`;
    return { time: display, selected: false };
  });

  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Jones'];

  const [slots, setSlots] = useState(timeSlots);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [confirmedSlot, setConfirmedSlot] = useState(null);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${date}`;
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setConfirmedSlot(null);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
    setConfirmedSlot(null);
  };

  const selectSlot = (index) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot, i) => ({
        ...slot,
        selected: i === index,
      }))
    );
  };

  const confirmSelection = async () => {
    const selectedSlot = slots.find((slot) => slot.selected);
    if (!selectedDate) {
      alert('Please select a date.');
    } else if (!selectedDoctor) {
      alert('Please select a doctor.');
    } else if (!selectedSlot) {
      alert('Please select a time slot before confirming.');
    } else {
      setConfirmedSlot({ date: selectedDate, time: selectedSlot.time, doctor: selectedDoctor });

      const appointmentData = {
        doctorName: selectedDoctor,
        slot: selectedSlot.time,
        patientId: 1234,
      };

      try {
        const response = await axios.post('http://localhost:8080/api/appointments', appointmentData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Appointment created successfully!', response.data);
      } catch (error) {
        console.error('Error creating appointment:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Schedule an Appointment</h2>

      {/* Doctor Selector */}
      <div style={styles.selectorContainer}>
        <label htmlFor="doctorSelector" style={styles.label}>
          Select Doctor:
        </label>
        <select
          id="doctorSelector"
          value={selectedDoctor}
          onChange={handleDoctorChange}
          style={styles.selector}
        >
          <option value="" disabled>Choose a doctor</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor}>{doctor}</option>
          ))}
        </select>
      </div>

      {/* Date Picker */}
      <div style={styles.datePickerContainer}>
        <label htmlFor="datePicker" style={styles.datePickerLabel}>Select Date:</label>
        <input
          id="datePicker"
          type="date"
          min={getTodayDate()}
          value={selectedDate}
          onChange={handleDateChange}
          style={styles.datePicker}
        />
      </div>

      {/* Time Slots */}
      <div style={styles.slotsContainer}>
        {slots.map((slot, index) => (
          <div
            key={index}
            style={{
              ...styles.slot,
              ...(slot.selected ? styles.selected : styles.default),
            }}
            onClick={() => selectSlot(index)}
          >
            {slot.time}
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <button style={styles.button} onClick={confirmSelection}>
        Confirm Selection
      </button>

      {/* Confirmation Message */}
      {confirmedSlot && (
        <div style={styles.confirmation}>
          <strong>Confirmed Slot:</strong> {confirmedSlot.time} on {confirmedSlot.date} with {confirmedSlot.doctor}
        </div>
      )}
    </div>
  );
};

// Updated styles
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '700px',
    margin: '20px auto',
    border: '1px solid #dcdcdc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '26px',
    fontWeight: '600',
    color: '#333',
  },
  selectorContainer: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '18px',
    color: '#444',
    display: 'block',
    marginBottom: '8px',
  },
  selector: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  datePickerContainer: {
    marginBottom: '20px',
  },
  datePickerLabel: {
    fontSize: '18px',
    color: '#444',
    display: 'block',
    marginBottom: '8px',
  },
  datePicker: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  slotsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
  },
  slot: {
    padding: '12px',
    fontSize: '16px',
    textAlign: 'center',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  default: {
    backgroundColor: '#ffffff',
    color: '#555',
  },
  selected: {
    backgroundColor: '#1a73e8',
    color: '#fff',
    fontWeight: '700',
    transform: 'scale(1.05)',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#1a73e8',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'background-color 0.3s',
    outline: 'none',
  },
  buttonHover: {
    backgroundColor: '#1558b0',
  },
  confirmation: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#34a853',
  },
};

export default TimeSlotPicker;
