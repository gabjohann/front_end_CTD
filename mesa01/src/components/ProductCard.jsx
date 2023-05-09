import { formatMoney } from '../utils/formatMoney';

export function ProductCard(props) {
  return (
    <>
      <div className='w-[411px] grid grid-cols-2 border border-borderColor rounded-lg'>
        <div className='w-[169px] h-[151px] flex'>
          <img
            src={props.cardImagePath}
            alt={props.cardImageAlt}
            width={169}
            height={151}
          />
        </div>
        <div className='py-[14px] flex flex-col justify-center'>
          <p className='text-sm font-medium text-textColor mb-[6px]'>
            {props.cardProductTitle}
          </p>
          <p className='text-xs font-bold text-secondaryColor mb-[7px]'>
            {props.cardProductDescription}
          </p>
          <h1 className='text-2xl font-bold text-textColor'>
            {formatMoney(props.price)}
          </h1>
        </div>
      </div>
    </>
  );
}
