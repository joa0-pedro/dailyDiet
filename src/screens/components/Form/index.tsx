import { ArrowLeft } from "phosphor-react-native";
import { View } from "react-native";
import { Body, CreateForm, Field, Head, HeaderTexts, Icon, Input, InputMD, InputSM, InputXL, Label, Placeholder, Radius, RadiusText, Select, SmallField, Span, SpanGreen, SpanRed, SubmitButton, Title } from "./styles";

export function Form(){
	return (
		<View>
			<Head>
				<Icon>
					<ArrowLeft size={32} color="#333638"/>
				</Icon>
				<HeaderTexts>
					<Title>Nova refeição</Title>
				</HeaderTexts>
			</Head>
			<Body>
				<CreateForm>
					<Field>
						<Label>Nome</Label>
						<InputMD></InputMD>
					</Field>
						<Label>Descrição</Label>
						<InputXL></InputXL>
					<SmallField>
						<Field>
							<Label>Data</Label>
							<InputSM></InputSM>
						</Field>
						<Field>
							<Label>Hora</Label>
							<InputSM></InputSM>
						</Field>
					</SmallField>
						<Label>Está dentro da dieta?</Label>
					<Select>
						<Radius>
							<SpanGreen />
							<RadiusText>Sim</RadiusText>
						</Radius>
						<Radius>
							<SpanRed />
							<RadiusText>Não</RadiusText>
						</Radius>
					</Select>
				</CreateForm>
				<SubmitButton>
					<Placeholder>Cadastrar refeição</Placeholder>
				</SubmitButton>
			</Body>
		</View>
	)
}
