import { ArrowUpRight, UserCircle } from "phosphor-react-native";
import { Logo } from "../../icon/Logo";
import { Meals } from "../components/Meals";
import { Content, Description, Header, Icon, PercentInfo, Texts, Value } from "./styles";

export function Home(){
	return (
		<Content>
			<Header>
				<Logo />
				<UserCircle size={32} weight="fill" />
			</Header>
			<PercentInfo>
				<Icon>
				<ArrowUpRight size={32} color="#639339"/>
				</Icon>
				<Texts>
				<Value>90,86%</Value>
				<Description>das refeições dentro da dieta</Description>
				</Texts>
			</PercentInfo>

			<Meals />
		</Content>
	)
}
