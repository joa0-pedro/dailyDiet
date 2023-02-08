import styled from "styled-components/native";
import themes from "../../../../../themes";


export const Content = styled.View`
	justify-content: center;
	align-items: center;
	margin-top: 160px;
	`

export const Head = styled.View`
	align-items: center;
`
export const Title = styled.Text`
	font-size: ${themes.FONT_SIZE.XXL};
	font-family: ${themes.FONT_FAMILY.BOLD};
`

export const TitleGreen = styled(Title)`
	color: ${themes.COLORS.GREEN_DARK};

`

export const TitleRed = styled(Title)`
	color: ${themes.COLORS.RED_DARK};
`

export const Subtitle = styled.Text`
	color: ${themes.COLORS.GRAY_1};
	font-size: ${themes.FONT_SIZE.LG};
	font-family: ${themes.FONT_FAMILY.REGULAR};

	margin-bottom: 40px;
`

export const Picture = styled.View`
`

export const HomeButton = styled.View`
	background-color: ${themes.COLORS.GRAY_2};
	padding: 16px 24px;
	border-radius: 6px;

	margin-top: 32px;
`

export const Placeholder = styled.Text`
	color: ${themes.COLORS.WHITE};
	font-size: ${themes.FONT_SIZE.MD};
	font-family: ${themes.FONT_FAMILY.BOLD};
`
