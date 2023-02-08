import { ArrowLeft } from "phosphor-react-native";
import { View } from "react-native";
import { Body, Card, CardTexts, Description, Icon, MiniCardGreen, MiniCardRed, MiniCardsContent, Number, PercentInfo, Subtitle, Texts, Title, TitleText, Value } from "./styles";

export function Percent(){
	return (
		<View>
			<PercentInfo>
				<Icon>
					<ArrowLeft size={32} color="#639339"/>
				</Icon>
				<Texts>
					<Value>90,86%</Value>
					<Description>das refeições dentro da dieta</Description>
				</Texts>
			</PercentInfo>
			<Body>
				<Title>
					<TitleText>
						Estatísticas gerais
					</TitleText>
				</Title>
				<Card>
					<CardTexts>
						<Number>22</Number>
						<Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
					</CardTexts>
				</Card>
				<Card>
					<CardTexts>
						<Number>109</Number>
						<Subtitle>refeições registradas</Subtitle>
					</CardTexts>
				</Card>
				<MiniCardsContent>
					<MiniCardGreen>
						<CardTexts>
							<Number>99</Number>
							<Subtitle>refeições dentro da dieta</Subtitle>
						</CardTexts>
					</MiniCardGreen>
					<MiniCardRed>
						<CardTexts>
							<Number>10</Number>
							<Subtitle>refeições fora da dieta</Subtitle>
						</CardTexts>
					</MiniCardRed>
				</MiniCardsContent>
			</Body>
		</View>
	)
}
