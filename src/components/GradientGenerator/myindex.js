import {Component} from 'react'
import {
  BgContainer,
  BodyContainer,
  Heading,
  Desc,
  UnOrderList,
  Input,
  ColorContainer,
  GeneratorButton,
  Para,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
    generatedFirstColor: '#8ae323',
    generatedSecondColor: '#014f7b',
    generatedDirection: gradientDirectionsList[0].value,
  }

  onChangeDirection = value => {
    this.setState({direction: value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  onGenerate = () => {
    const {firstColor, secondColor, direction} = this.state
    this.setState({
      generatedDirection: direction,
      generatedFirstColor: firstColor,
      generatedSecondColor: secondColor,
    })
  }

  render() {
    const {
      activeTab,
      generatedFirstColor,
      generatedSecondColor,
      generatedDirection,
      firstColor,
      secondColor,
    } = this.state
    return (
      <BgContainer
        direction={generatedDirection}
        firstColor={generatedFirstColor}
        secondColor={generatedSecondColor}
        data-testid="gradientGenerator"
      >
        <BodyContainer>
          <Heading> Generate a CSS Color Gradient </Heading>
          <Para> Choose Direction </Para>
          <UnOrderList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                activeTab={activeTab}
                object={each}
                onChangeDirection={this.onChangeDirection}
                onChangeActiveTab={this.onChangeActiveTab}
              />
            ))}
          </UnOrderList>
          <Para> Pick the Colors </Para>
          <ColorContainer>
            <div>
              <Desc> {firstColor}</Desc>
              <Input
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColor}
              />
            </div>
            <div>
              <Desc>{secondColor}</Desc>
              <Input
                type="color"
                value={secondColor}
                onChange={this.onChangeSecondColor}
              />
            </div>
          </ColorContainer>
          <GeneratorButton onClick={this.onGenerate}>Generate</GeneratorButton>
        </BodyContainer>
      </BgContainer>
    )
  }
}

export default GradientGenerator
