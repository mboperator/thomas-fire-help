import { Banner, SuccessBanner, ActionBanner } from '@procore/core-react'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import { connectModule } from 'redux-modules'
import Loader from 'react-loader'
import MediaQuery from 'react-responsive'
import React from 'react'
import styled, { keyframes } from 'styled-components'

import { MobileContainer, Container, HeaderContainer } from '../../components/atoms'
import { Input, Button, Select } from 'antd'
import Layout from '../../components/Layout'
import lfVolunteersModule from '../../modules/lfVolunteers'

const Option = Select.Option
const { TextArea } = Input

const RequiredIndicator = styled.em`
  color: red;
`

const Label = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0;
`

const StackContainer = styled.div`
  margin: 20px 0;
`

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const dropIn = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const SuccessBannerContainer = styled(SuccessBanner)`
  animation: ${fadeIn} 1s, ${dropIn} .7s forwards;
`

const StackInput = ({ required, children, label }) => (
  <StackContainer>
    <Label>
      {required && <RequiredIndicator>*</RequiredIndicator>} {label}
    </Label>
    <div>
      {children}
    </div>
  </StackContainer>
)

const LFVolunteerForm = ({ actions, update, resetForm, formData, loading, successMessage, isLoggedIn, history: { goBack }, match: { path } }) => (
  <Layout header="Housing" onBack={goBack}>
    <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
      <MobileContainer>
        {successMessage &&
          <SuccessBannerContainer>
            <Banner.Content>
              <Banner.Title style={{ fontSize: '17px' }}>Success!</Banner.Title>
              <Banner.Body style={{ fontSize: '15px' }}>Save Successful</Banner.Body>
            </Banner.Content>
          </SuccessBannerContainer>
        }

        {isLoggedIn ? (
          <Loader loaded={!loading} lines={13} length={10} width={2}>
            <HeaderContainer>
              I need volunteer help...
            </HeaderContainer>

            {(formType => {
              if (formType === 'organization') {
                return (
                  <div>
                    <StackInput required label="Organization's name:">
                      <Input
                        onChange={ e => update('organization', e.target.value)}
                      />
                    </StackInput>

                    <StackInput required label="Number of volunteers:">
                      <Input
                        onChange={ e => update('number_of_volunteers', e.target.value)}
                      />
                    </StackInput>
                  </div>
                )
              }
            })(path.split('/').pop())}

            <StackInput required label="Describe what you need (be specific):">
              <TextArea
                autosize={{ minRows: 3 }}
                onChange={ e => update('volunteers_notes', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Your name:">
              <Input
                onChange={ e => update('contact_name', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Phone number:">
              <Input
                onChange={ e => update('phone_number', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Email address:">
              <Input
                onChange={ e => update('email_address', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Street address:">
              <Input
                onChange={ e => update('address', e.target.value)}
              />
            </StackInput>

            {/* <StackInput required label="City:">
              <Select
                showSearch
                style={{ width: '100%' }}
                value={formData.city}
                placeholder="Select a city"
                optionFilterProp="children"
                onChange={ e => update('city', e.target.value)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="goleta">Goleta</Option>
                <Option value="ojai">Ojai</Option>
                <Option value="santa_barbara">Santa Barbara</Option>
                <Option value="camarillo">Camarillo</Option>
                <Option value="ventura">Ventura</Option>
                <Option value="thousand_oaks">Thousand Oaks</Option>
              </Select>
            </StackInput> */}

            <StackInput required label="Required Skills:">
              <TextArea
                autosize={{ minRows: 3 }}
                onChange={ e => update('skills', e.target.value)}
              />
            </StackInput>

            <div style={{ paddingTop: '1em' }}>
              <Button
                size="large"
                style={{ width: '100%' }}
                onClick={() => {
                  actions.create(formData)
                  resetForm()
                }}
              >
                Submit
              </Button>
            </div>
          </Loader>
        ) : (
          <ActionBanner>
            <Banner.Content>
              <Banner.Title>Whoops!</Banner.Title>
              <Banner.Body>
                <div>We can't post a listing yet because you're not logged in. Try:</div>
                <ul style={{ marginTop: '10px' }}>
                  <li>Signing up</li>
                  <li>Verifying your phone number</li>
                </ul>
              </Banner.Body>
            </Banner.Content>
          </ActionBanner>
        )}
      </MobileContainer>
    </MediaQuery>

    <MediaQuery minDeviceWidth={481}>
      <Container>
        {successMessage &&
          <SuccessBannerContainer>
            <Banner.Content>
              <Banner.Title style={{ fontSize: '17px' }}>Success!</Banner.Title>
              <Banner.Body style={{ fontSize: '15px' }}>Save Successful</Banner.Body>
            </Banner.Content>
          </SuccessBannerContainer>
        }

        {isLoggedIn ? (
          <Loader loaded={!loading} lines={13} length={10} width={2}>
            <HeaderContainer>
              I need volunteer help...
            </HeaderContainer>

            {(formType => {
              if (formType === 'organization') {
                return (
                  <div>
                    <StackInput required label="Organization's name:">
                      <Input
                        onChange={ e => update('organization', e.target.value)}
                      />
                    </StackInput>

                    <StackInput required label="Number of volunteers:">
                      <Input
                        onChange={ e => update('number_of_volunteers', e.target.value)}
                      />
                    </StackInput>
                  </div>
                )
              }
            })(path.split('/').pop())}

            <StackInput required label="Describe what you need (be specific):">
              <TextArea
                autosize={{ minRows: 3 }}
                onChange={ e => update('volunteers_notes', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Your name:">
              <Input
                onChange={ e => update('contact_name', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Phone number:">
              <Input
                onChange={ e => update('phone_number', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Email address:">
              <Input
                onChange={ e => update('email_address', e.target.value)}
              />
            </StackInput>

            <StackInput required label="Street address:">
              <Input
                onChange={ e => update('address', e.target.value)}
              />
            </StackInput>

            {/* <StackInput required label="City:">
              <Select
                showSearch
                style={{ width: '100%' }}
                value={formData.city}
                placeholder="Select a city"
                optionFilterProp="children"
                onChange={ e => update('city', e.target.value)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="goleta">Goleta</Option>
                <Option value="ojai">Ojai</Option>
                <Option value="santa_barbara">Santa Barbara</Option>
                <Option value="camarillo">Camarillo</Option>
                <Option value="ventura">Ventura</Option>
                <Option value="thousand_oaks">Thousand Oaks</Option>
              </Select>
            </StackInput> */}

            <StackInput required label="Required Skills:">
              <TextArea
                autosize={{ minRows: 3 }}
                onChange={ e => update('skills', e.target.value)}
              />
            </StackInput>

            <div style={{ paddingTop: '1em' }}>
              <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
                <Button
                  size="large"
                  style={{ width: '100%' }}
                  onClick={() => {
                    actions.create(formData)
                    resetForm()
                  }}
                >
                  Submit
                </Button>
              </MediaQuery>
              <Button
                size="large"
                onClick={() => {
                  actions.create(formData)
                  resetForm()
                }}
              >
                Submit
                </Button>
            </div>
          </Loader>
        ) : (
          <ActionBanner>
            <Banner.Content>
              <Banner.Title>Whoops!</Banner.Title>
              <Banner.Body>
                <div>We can't post a listing yet because you're not logged in. Try:</div>
                <ul style={{ marginTop: '10px' }}>
                  <li>Signing up</li>
                  <li>Verifying your phone number</li>
                </ul>
              </Banner.Body>
            </Banner.Content>
          </ActionBanner>
        )}
      </Container>
    </MediaQuery>
  </Layout>
)

export default compose(
  connectModule(lfVolunteersModule),
  withStateHandlers( props => (
    {
      formData: {
        volunteer_type: props.location.pathname.split('/').pop(),
      },
    }),
    {
      update: (state) => (key, value) => Object.assign({}, { formData: { ...state.formData, [key]: value  } }),
      resetForm: (state) => () => Object.assign({}, { formData: {} })
    }
  ),
  lifecycle({
    componentDidMount() {
      this.setState({ isLoggedIn: Boolean(JSON.parse(localStorage.getItem('auth')))});
      this.props.actions.resetBanners();
    }
  }),
)(LFVolunteerForm)
