import { ICommonProps } from '../../types'

interface IProps extends ICommonProps {
  width?: number,
  height?: number,
}

const FingerPrintSvgIcon = (props: IProps) => {
  const { width = 13, height = 14 } = props
  return (
    <svg width={width} height={height} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.277 1.66482C9.54747 1.79263 9.63331 2.12924 9.48343 2.38814C9.33355 2.64704 9.00133 2.73569 8.72874 2.61244C8.14125 2.34681 7.50961 2.18773 6.86342 2.14422C6.03663 2.08856 5.2081 2.22357 4.44176 2.53885C3.67542 2.85413 2.99175 3.34125 2.4435 3.96262C2.015 4.44827 1.67818 5.00578 1.4477 5.60794C1.34077 5.88732 1.04234 6.05813 0.753666 5.97966C0.464988 5.90118 0.289092 5.60162 0.391323 5.32048C0.668652 4.5578 1.08694 3.85223 1.62597 3.2413C2.28471 2.4947 3.10616 1.90941 4.02695 1.53059C4.94773 1.15177 5.94324 0.989546 6.93666 1.05643C7.74954 1.11116 8.54325 1.3181 9.277 1.66482Z" fill="#036672" />
      <path d="M10.8442 5.3297C10.5493 4.75047 10.1415 4.23608 9.64486 3.81677C9.1482 3.39746 8.57271 3.0817 7.95223 2.88808C7.33175 2.69445 6.67881 2.62686 6.03182 2.68928C5.38483 2.75171 4.75686 2.94288 4.18485 3.25156C3.61283 3.56025 3.10832 3.98021 2.70099 4.48673C2.29366 4.99326 1.99173 5.57613 1.81298 6.20106C1.72541 6.50719 1.66827 6.82039 1.64191 7.13612C1.63087 7.17921 1.625 7.22438 1.625 7.27091V9.88892C1.625 10.3354 1.51475 10.5998 1.43136 10.7388C1.37202 10.8377 1.31955 10.8845 1.30919 10.8933C1.07292 11.0627 1.01183 11.3902 1.17431 11.6339C1.34026 11.8828 1.67656 11.95 1.92547 11.7841C1.96736 11.7561 2.01754 11.7182 2.09266 11.6431C2.17193 11.5638 2.26785 11.4502 2.36031 11.2961C2.54775 10.9837 2.70833 10.5258 2.70833 9.88892V7.4519C2.71596 7.13002 2.76456 6.80968 2.85352 6.4987C2.99259 6.01251 3.22748 5.55904 3.54438 5.16496C3.86128 4.77088 4.25379 4.44416 4.69882 4.204C5.14385 3.96385 5.63241 3.81511 6.13576 3.76655C6.63911 3.71798 7.1471 3.77057 7.62983 3.92121C8.11256 4.07185 8.56029 4.31751 8.94669 4.64373C9.33309 4.96995 9.65035 5.37015 9.87981 5.82078C9.99282 6.04272 10.0834 6.27469 10.1506 6.51322C10.3419 7.31966 10.435 7.86355 10.4615 8.44655C10.4933 9.14542 10.4304 9.9186 10.2944 11.2795C10.2646 11.5772 10.4818 11.8426 10.7794 11.8724C11.0771 11.9022 11.3425 11.685 11.3723 11.3873C11.5071 10.0399 11.5797 9.18807 11.5437 8.39736C11.5176 7.82204 11.4346 7.28844 11.2889 6.62945C11.2662 6.51018 11.239 6.39184 11.2075 6.27469C11.1233 5.91937 11.0064 5.6481 10.8442 5.3297Z" fill="#036672" />
      <path d="M0.635143 6.46417C0.343459 6.41058 0.0612177 6.60358 0.0318801 6.89869C-0.0440955 7.66294 0.0159869 8.43469 0.209328 9.17798C0.283985 9.46499 0.592696 9.61199 0.872572 9.5139C1.15245 9.41581 1.29703 9.10977 1.22707 8.82157C1.08989 8.25643 1.04446 7.67285 1.09252 7.09329C1.11703 6.79773 0.926828 6.51776 0.635143 6.46417Z" fill="#036672" />
      <path d="M12.9992 7.43793C13.0039 7.73431 12.7458 7.95833 12.4501 7.93861C12.1543 7.91889 11.9333 7.66274 11.9237 7.36647C11.8994 6.61358 11.7185 5.87193 11.3903 5.18957C11.0621 4.50721 10.5956 3.90291 10.0226 3.41393C9.79708 3.22152 9.73491 2.88898 9.90412 2.6456C10.0733 2.40223 10.4094 2.34045 10.638 2.52915C11.3616 3.12649 11.949 3.87489 12.3576 4.72428C12.7662 5.57367 12.9842 6.49974 12.9992 7.43793Z" fill="#036672" />
      <path d="M9.74686 7.68466C9.7337 7.98352 9.44101 8.17062 9.14846 8.10806L8.95701 8.06712C8.66446 8.00457 8.48601 7.71388 8.46682 7.41534C8.4594 7.2999 8.44181 7.18498 8.41407 7.07195C8.34309 6.78276 8.2075 6.51341 8.01749 6.28413C7.82748 6.05485 7.58798 5.87162 7.31699 5.74818C7.046 5.62474 6.75057 5.56431 6.45287 5.57143C6.15518 5.57855 5.86297 5.65304 5.59819 5.78929C5.33342 5.92554 5.10296 6.12002 4.92412 6.35812C4.74529 6.59622 4.62273 6.87174 4.56566 7.164C4.54335 7.27823 4.53128 7.39385 4.52939 7.50952C4.52449 7.80863 4.36014 8.10752 4.07093 8.18399L3.88164 8.23404C3.59243 8.31051 3.29112 8.13762 3.26369 7.83973C3.23545 7.53302 3.25087 7.22293 3.31026 6.91884C3.40437 6.4369 3.60647 5.98256 3.90136 5.58993C4.19626 5.19731 4.57629 4.87661 5.01291 4.65193C5.44953 4.42724 5.93139 4.30442 6.42229 4.29268C6.91319 4.28094 7.40036 4.38058 7.84723 4.58413C8.29409 4.78768 8.68902 5.08985 9.00235 5.46792C9.31568 5.846 9.53927 6.29016 9.65632 6.76705C9.73018 7.06795 9.7604 7.37695 9.74686 7.68466Z" fill="#036672" />
      <path d="M4.33334 9.43758C4.33334 9.13843 4.09082 8.89591 3.79167 8.89591C3.49252 8.89591 3.25 9.13843 3.25 9.43758C3.25 10.3068 3.06392 10.9834 2.88249 11.4369C2.79169 11.6639 2.70208 11.835 2.6377 11.9459C2.60837 11.9964 2.57803 12.0467 2.544 12.0942C2.36668 12.3334 2.41566 12.6712 2.65417 12.8501C2.89349 13.0296 3.23301 12.9811 3.4125 12.7417C3.47119 12.6609 3.52438 12.5762 3.57455 12.4898C3.66251 12.3384 3.77603 12.1201 3.88834 11.8393C4.11317 11.2772 4.33334 10.4642 4.33334 9.43758Z" fill="#036672" />
      <path d="M9.20833 8.89591C9.50749 8.89591 9.75 9.13843 9.75 9.43758C9.75 10.4113 9.68045 11.18 9.60983 11.7097C9.57452 11.9745 9.53893 12.1796 9.51162 12.3208C9.49693 12.3967 9.4818 12.4726 9.46311 12.5476C9.39056 12.8379 9.09635 13.0148 8.80613 12.9422C8.51618 12.8698 8.33979 12.5762 8.4118 12.2862C8.42587 12.2296 8.43694 12.1722 8.44802 12.1149C8.47149 11.9937 8.50361 11.8095 8.536 11.5665C8.6008 11.0805 8.66667 10.3597 8.66667 9.43758C8.66667 9.13843 8.90918 8.89591 9.20833 8.89591Z" fill="#036672" />
      <path d="M6.40464 7.24255C6.79842 7.10771 6.84427 7.45462 6.89507 7.79098C7.00908 8.54579 6.92582 9.74886 6.7735 11.2799C6.74388 11.5776 6.96119 11.8429 7.25887 11.8725C7.55656 11.9021 7.82189 11.6848 7.85151 11.3871C8.00016 9.89303 8.10453 8.54468 7.96626 7.6292C7.89862 7.18134 7.75701 6.71134 7.41581 6.40829C7.02471 6.06091 6.5268 6.05564 6.0537 6.21763C5.8216 6.2971 5.61033 6.40863 5.44015 6.57504C5.26428 6.74702 5.16202 6.94851 5.10686 7.15853C5.05456 7.35769 5.04485 7.56388 5.04655 7.75397C5.04824 7.94252 5.06249 8.15801 5.07359 8.36751C5.11799 9.20556 5.14529 10.4111 4.37713 12.2034C4.25929 12.4784 4.38666 12.7968 4.66163 12.9147C4.9366 13.0325 5.25503 12.9051 5.37287 12.6302C6.22972 10.6309 6.20481 9.24273 6.1554 8.31019C6.14306 8.07718 6.13125 7.90128 6.12984 7.74426C6.12758 7.49242 6.14537 7.33132 6.40464 7.24255Z" fill="#036672" />
    </svg>
  )
}

export default FingerPrintSvgIcon