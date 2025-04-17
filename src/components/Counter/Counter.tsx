import React from 'react';
import { Box, Button, Stack, Typography, Theme, TextField } from '@mui/material';
import { decrement, increment, addNote } from '@/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/store';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const notes = useAppSelector((state) => state.counter.notes);
  const [ note, setNote ] = React.useState('');

  return (
    <Stack
      sx={{
        width: '100%',
        backgroundColor: 'grey.100',
        boxShadow: 1,
        mt: 2,
        p: 2,
        borderRadius: 8,
        fontSize: 20,
        button: {
          fontSize: 20,
        },
      }}
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Button variant="contained" aria-label="Decrement value" onClick={() => dispatch(decrement(1))}>
        -
      </Button>
      <Box
        sx={{
          borderRadius: 1,
          backgroundColor: 'grey.200',
          boxShadow: 3,
          p: 1,
          height: 47,
          minWidth: 47,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {count}{' '}
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'primary.main' }}
        aria-label="Increment value"
        onClick={() => dispatch(increment(1))}
      >
        +
      </Button>
      <TextField
        id="counter_addnote"
        type="text"
        value={note}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNote(event.target.value);
        }}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: 'primary.main' }}
        aria-label="Add note"
        onClick={() => {
          dispatch(addNote(note));
          setNote('');
        }}
      >
        +
      </Button>
      {notes.map((n, idx) => <Box key={`note-${idx}`}
        sx={{
          borderRadius: 1,
          backgroundColor: 'gradient.gold',
          background: (theme: Theme) => theme.palette.gradient.gold,
          boxShadow: 3,
          p: 1,
          height: 47,
          minWidth: 47,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography fontWeight="bold">{n}</Typography>
      </Box>)}
    </Stack>
  );
};

export default Counter;
