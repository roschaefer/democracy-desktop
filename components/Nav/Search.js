import { Component } from 'react';
import styled from 'styled-components';

// Components
import { Input as AntInput } from 'antd';
import Icon from 'Components/shared/Icon';
import { Mobile } from './Responsive';

// Context
import { Consumer as SearchConsumer } from 'Context/search';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Input = styled(AntInput)`
  height: 45px;
  border-radius: 3px;
  & .ant-input {
    background-color: ${({ theme }) => theme.backgrounds.secondary};
  }
`;

const InputDesktop = styled(Input)`
  display: none;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    display: block;
  }
`;

class Suche extends Component {
  render() {
    return (
      <Wrapper>
        <SearchConsumer>
          {consumerProps => {
            const { term, changeSearchTerm } = consumerProps;

            return (
              <>
                <InputDesktop
                  placeholder="Suche"
                  onChange={({ target: { value } }) => changeSearchTerm(value)}
                  value={term}
                  prefix={<Icon type="lens" fontSize={13} top={0} />}
                />

                <Mobile
                  dropDownContent={
                    <Input
                      autoFocus
                      placeholder="Suche"
                      onChange={({ target: { value } }) => changeSearchTerm(value)}
                      value={term}
                      prefix={<Icon type="lens" fontSize={13} top={0} />}
                    />
                  }
                >
                  <Icon type="lens" top={0} />
                </Mobile>
              </>
            );
          }}
        </SearchConsumer>
      </Wrapper>
    );
  }
}

export default Suche;
