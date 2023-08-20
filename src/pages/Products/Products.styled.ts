import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ProductsFilterWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 74px;
`;

export const FilterButtons = styled.button<{selected:boolean}>`
  color: ${({ selected }) => selected ? '#12724F' : '#1E1E1E'};
  font-family: Bokonique, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FilteredItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 119px;
`



