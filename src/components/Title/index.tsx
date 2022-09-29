import { FC, ReactNode } from 'react'

export interface ITitleProps {
	text: string | ReactNode;
}

const Title: FC<ITitleProps> = (props) => {
	const { text } = props;
	return (
		<div>{text}</div>
	)
}

Title.defaultProps = {
	text: 'title'
}

export default Title