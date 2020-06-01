import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mystic};
  width: 100%;

  /* Hide arrow for IE */
	select::-ms-expand {
		display: none;
	}

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.mystic};

    top: 16px;
    right: 12px;
  }
`

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  padding: ${({ theme }) => theme.space.medium}px;
  padding-right: 30px;
  width: 100%;
`

const Select = ({ children, value, name, onChange }) => (
  <React.Fragment>
    <SelectWrapper>
      <StyledSelect value={value} name={name} onChange={onChange}>
        {children}
      </StyledSelect>
    </SelectWrapper>
  </React.Fragment>
)

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export {
  Select
}
