const Star = ({ fav }: { fav?: boolean }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon"
    >
      <path
        d="M14.3851 11.539C14.2995 11.6143 14.2358 11.7113 14.2009 11.8198C14.1659 11.9284 14.161 12.0443 14.1867 12.1554L15.2429 16.7289C15.2709 16.8483 15.263 16.9733 15.2204 17.0883C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4954C14.5409 17.5011 14.4194 17.4706 14.314 17.4078L10.3218 14.9859C10.2248 14.9269 10.1135 14.8957 9.99998 14.8957C9.88645 14.8957 9.7751 14.9269 9.6781 14.9859L5.68591 17.4078C5.58058 17.4706 5.45907 17.5011 5.33654 17.4954C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0883C4.73695 16.9733 4.72909 16.8483 4.75701 16.7289L5.81326 12.1554C5.83893 12.0443 5.83404 11.9284 5.7991 11.8198C5.76416 11.7113 5.70048 11.6143 5.61482 11.539L2.0906 8.46479C1.99638 8.38471 1.92803 8.27849 1.8942 8.15955C1.86038 8.04062 1.86259 7.91432 1.90056 7.79664C1.93853 7.67896 2.01056 7.57519 2.10752 7.49846C2.20449 7.42173 2.32203 7.37548 2.44529 7.36558L7.0906 6.96401C7.20393 6.95392 7.31236 6.91307 7.40419 6.84589C7.49602 6.7787 7.56777 6.68772 7.61169 6.58276L9.42654 2.25776C9.47501 2.14594 9.55512 2.05074 9.657 1.98386C9.75889 1.91698 9.8781 1.88135 9.99998 1.88135C10.1218 1.88135 10.2411 1.91698 10.3429 1.98386C10.4448 2.05074 10.5249 2.14594 10.5734 2.25776L12.3883 6.58276C12.4322 6.68772 12.5039 6.7787 12.5958 6.84589C12.6876 6.91307 12.796 6.95392 12.9094 6.96401L17.5547 7.36558C17.6779 7.37548 17.7955 7.42173 17.8924 7.49846C17.9894 7.57519 18.0614 7.67896 18.0994 7.79664C18.1374 7.91432 18.1396 8.04062 18.1057 8.15955C18.0719 8.27849 18.0036 8.38471 17.9094 8.46479L14.3851 11.539Z"
        fill="yellow"
        fill-opacity={fav ? 0.5 : 0}
      />
      <path
        d="M18.6875 7.60075C18.6118 7.36745 18.4692 7.16158 18.2773 7.00877C18.0855 6.85597 17.8529 6.76297 17.6086 6.74137L12.9688 6.34137L11.15 2.01637C11.0553 1.78943 10.8956 1.59558 10.691 1.45923C10.4863 1.32288 10.2459 1.25012 10 1.25012C9.75411 1.25012 9.51371 1.32288 9.30907 1.45923C9.10443 1.59558 8.94471 1.78943 8.85002 2.01637L7.03674 6.34137L2.39142 6.74372C2.14614 6.76433 1.9124 6.8569 1.71952 7.00982C1.52663 7.16275 1.38319 7.36921 1.30718 7.60333C1.23117 7.83745 1.22598 8.0888 1.29225 8.32586C1.35852 8.56292 1.49331 8.77514 1.6797 8.9359L5.20392 12.0156L4.14767 16.589C4.09182 16.8284 4.10776 17.0788 4.19349 17.3092C4.27923 17.5395 4.43095 17.7394 4.6297 17.884C4.82845 18.0285 5.0654 18.1113 5.31093 18.1219C5.55647 18.1326 5.79968 18.0706 6.01017 17.9437L9.99455 15.5218L13.9875 17.9437C14.198 18.0706 14.4412 18.1326 14.6868 18.1219C14.9323 18.1113 15.1692 18.0285 15.368 17.884C15.5667 17.7394 15.7185 17.5395 15.8042 17.3092C15.8899 17.0788 15.9059 16.8284 15.85 16.589L14.7945 12.0109L18.318 8.9359C18.5044 8.77459 18.6389 8.56176 18.7046 8.3242C18.7704 8.08664 18.7644 7.83494 18.6875 7.60075ZM17.4985 7.99137L13.975 11.0664C13.8035 11.2155 13.676 11.4086 13.606 11.6249C13.5361 11.8412 13.5265 12.0724 13.5781 12.2937L14.6367 16.875L10.6469 14.4531C10.4522 14.3345 10.2287 14.2718 10.0008 14.2718C9.77288 14.2718 9.54936 14.3345 9.3547 14.4531L5.37033 16.875L6.42189 12.2968C6.47357 12.0755 6.46393 11.8443 6.394 11.628C6.32407 11.4118 6.1965 11.2187 6.02502 11.0695L2.50002 7.99606C2.49973 7.99373 2.49973 7.99136 2.50002 7.98903L7.14377 7.58747C7.37049 7.56748 7.58745 7.48598 7.77125 7.35174C7.95505 7.21751 8.09871 7.03564 8.18674 6.82575L10 2.50622L11.8125 6.82575C11.9005 7.03564 12.0442 7.21751 12.228 7.35174C12.4118 7.48598 12.6288 7.56748 12.8555 7.58747L17.5 7.98903C17.5 7.98903 17.5 7.99372 17.5 7.9945L17.4985 7.99137Z"
        // fill="#1C1C1C"
      />
    </svg>
  );
};

export default Star;
