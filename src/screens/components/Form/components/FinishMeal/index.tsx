import { Image, View } from "react-native";
import { Content, Head, HomeButton, Picture, Placeholder, Subtitle, Title, TitleGreen } from "./styles";
import { IlustrationRed } from "../../../../../icon/IllustrationRed";
import { IlustrationGreen } from "../../../../../icon/IllustrationGreen";

export function FinishMeal(){
	return (
			<Content>
			<Head>
				<TitleGreen>Continue assim!</TitleGreen>
				<Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>
			</Head>
			<Picture>
			<IlustrationGreen />
			</Picture>
			<HomeButton>
				<Placeholder>Ir para a página inicial</Placeholder>
			</HomeButton>
			</Content>
	)
}
