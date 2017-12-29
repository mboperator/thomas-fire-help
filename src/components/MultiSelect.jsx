import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Button = styled.div`
  border: 1px solid white;
  padding: 5px 10px;
  color: ${({ selected }) => selected ? 'black' : 'white'};
  background-color: ${({ selected }) => selected ? 'white' : 'black'};
  margin: 10px;
  cursor: pointer;
`

export const SingleSelect = ({ value = [], options, onChange }) => (
  <Container>
    {options.map(option => (
      <Button
        selected={value.includes(option.value)}
        onClick={() => value.includes(option.value)
          ? onChange(value.filter(val => option.value !== val))
          : onChange([option.value])
        }
      >
        {option.label}
      </Button>
    ))}
  </Container>
)

const MultiSelect = ({ value = [], options, onChange }) => (
  <Container>
    {options.map(option => (
      <Button
        selected={value.includes(option.value)}
        onClick={() => value.includes(option.value)
          ? onChange(value.filter(val => option.value !== val))
          : onChange(value.concat(option.value))
        }
      >
        {option.label}
      </Button>
    ))}
  </Container>
)

export default MultiSelect
