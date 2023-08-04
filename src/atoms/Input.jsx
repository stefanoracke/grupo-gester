import React from 'react'

export const Input = (props) => {
    return (
        <div className='w-full flex relative'>
            <span className='absolute top-[12px] left-[18px]'>
                <img src={props.icon} className='w-[25px] h-[25px]' alt="" />
            </span>
            <input className='rounded-full w-full border border text-white outline-none bg-transparent py-3 ps-[55px]'
                {...props} />
        </div>
    )
}


export const Textarea = (props) => {
    return (
        <div className='w-full flex relative'>
            <span className='absolute top-[12px] left-[18px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <g clip-path="url(#clip0_726_1301)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5984 3C20.4004 3 21.1696 3.31607 21.7366 3.87868C22.3037 4.44129 22.6223 5.20435 22.6223 6V16C22.6223 16.7956 22.3037 17.5587 21.7366 18.1213C21.1696 18.6839 20.4004 19 19.5984 19H7.83861L4.47909 21.5C3.64854 22.118 2.46318 21.53 2.46318 20.5V6C2.46318 5.20435 2.78176 4.44129 3.34885 3.87868C3.91594 3.31607 4.68507 3 5.48705 3H19.5984ZM11.5348 12H8.51092C8.24359 12 7.98721 12.1054 7.79819 12.2929C7.60916 12.4804 7.50296 12.7348 7.50296 13C7.50296 13.2652 7.60916 13.5196 7.79819 13.7071C7.98721 13.8946 8.24359 14 8.51092 14H11.5348C11.8021 14 12.0585 13.8946 12.2475 13.7071C12.4366 13.5196 12.5427 13.2652 12.5427 13C12.5427 12.7348 12.4366 12.4804 12.2475 12.2929C12.0585 12.1054 11.8021 12 11.5348 12ZM16.5746 8H8.51092C8.25401 8.00028 8.00691 8.09788 7.8201 8.27285C7.63329 8.44782 7.52087 8.68695 7.50581 8.94139C7.49076 9.19584 7.5742 9.44638 7.73909 9.64183C7.90398 9.83729 8.13788 9.9629 8.39299 9.993L8.51092 10H16.5746C16.8315 9.99972 17.0786 9.90212 17.2654 9.72715C17.4522 9.55218 17.5646 9.31305 17.5797 9.05861C17.5947 8.80416 17.5113 8.55362 17.3464 8.35817C17.1815 8.16271 16.9476 8.0371 16.6925 8.007L16.5746 8Z" fill="#22A5AB" />
                    </g>
                    <defs>
                        <clipPath id="clip0_726_1301">
                            <rect width="24.191" height="24" fill="white" transform="translate(0.447266)" />
                        </clipPath>
                    </defs>
                </svg>

            </span>
            <textarea className='rounded-[20px] w-[97%] border border text-white outline-none bg-transparent py-3 ps-[55px]'
                {...props} />
        </div>
    )
}
