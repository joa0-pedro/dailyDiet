import styled from "styled-components/native";
import themes from "../../themes";


export const Content = styled.View`
	padding: 64px 24px;
`

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	`

export const PercentInfo = styled.View`
	background-color: ${themes.COLORS.GREEN_LIGHT};

	border-radius: 8px;
	justify-content: center;
	padding-bottom: 20px;

	margin-top: 33px;
	margin-bottom: 40px;
`
export const Icon = styled.View`
		align-items: flex-end;
		margin: 8px;
`

export const Texts = styled.View`
	align-items: center;
	margin-top: -32px;
`

export const Value = styled.Text`
	font-size: ${themes.FONT_SIZE.XXL};
	font-family: ${themes.FONT_FAMILY.BOLD};
	color: ${themes.COLORS.GRAY_1};
`

export const Description = styled.Text`
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.REGULAR};
	color: ${themes.COLORS.GRAY_2};
`

