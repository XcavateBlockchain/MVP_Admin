import { ICommonProps } from '../../types'

interface IProps extends ICommonProps {
  width?: number,
  height?: number,
}

const LogoSvgIcon = (props: IProps) => {
  const { width = 50, height = 26 } = props
  return (
    <svg width={width} height={height} viewBox="0 0 50 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_iii_1618_5617)">
        <path d="M48.8089 0.5C49.4667 0.5 50.003 1.03364 49.9717 1.69071C49.6764 7.88776 47.0847 13.7707 42.6777 18.1777C37.9893 22.8661 31.6304 25.5 25 25.5C18.3696 25.5 12.0107 22.8661 7.32233 18.1777C2.91534 13.7707 0.3236 7.88776 0.0283439 1.69072C-0.00296198 1.03365 0.533266 0.500004 1.19108 0.500004C1.8489 0.500004 2.37889 1.03373 2.4135 1.69063C2.70663 7.25552 5.0466 12.533 9.00678 16.4932C11.2194 18.7058 15.2033 16.9793 18.5086 14.8212C21.8631 12.6309 26.3178 12.4128 29.7712 14.4436C33.7216 16.7667 38.6528 18.8336 40.9932 16.4932C44.9534 12.533 47.2934 7.25552 47.5865 1.69063C47.6211 1.03372 48.1511 0.5 48.8089 0.5Z" fill="#036672" />
      </g>
      <defs>
        <filter id="filter0_iii_1618_5617" x="0.0270386" y="-2.5" width="49.9459" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.933333 0 0 0 0 0.933333 0 0 0 0 0.933333 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1618_5617" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.716667 0 0 0 0 0.716667 0 0 0 0 0.716667 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="effect1_innerShadow_1618_5617" result="effect2_innerShadow_1618_5617" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="effect2_innerShadow_1618_5617" result="effect3_innerShadow_1618_5617" />
        </filter>
      </defs>
    </svg>
  )
}

export default LogoSvgIcon
