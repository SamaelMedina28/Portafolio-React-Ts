export default function Logo() {
  return (
    <svg width="42" height="42" viewBox="0 0 491 323" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <!-- Definición del gradiente lineal --> */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
          <stop offset="8%" stopColor="#818CF8" stopOpacity="1" />
          <stop offset="30%" stopColor="#60A5FA" stopOpacity="1" />
          <stop offset="90%" stopColor="#3B82F6" stopOpacity="1" />
          <stop offset="100%" stopColor="#101828" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect y="32" width="55" height="313" rx="5" fill="url(#blueGradient)" />
      <path
        d="M225.699 185.046C227.546 186.978 227.546 190.022 225.699 191.954L81.6149 342.731C78.4994 345.991 73 343.786 73 339.276L73 37.7236C73 33.2142 78.4994 31.009 81.6148 34.2692L225.699 185.046Z"
        fill="url(#blueGradient)" />
      <path
        d="M159.828 185.593C161.615 187.513 161.615 190.487 159.828 192.407L74.9096 283.621C71.8152 286.945 66.25 284.756 66.25 280.214L66.25 97.7855C66.25 93.2443 71.8152 91.0548 74.9096 94.3785L159.828 185.593Z"
        fill="#101828" />
      <path
        d="M331.968 338.892C330.048 342.522 324.86 342.522 323.066 338.892L175.016 39.4241C173.371 36.0976 175.856 32.148 179.593 32.148L486.041 32.148C489.778 32.148 492.126 36.0976 490.366 39.4241L331.968 338.892Z"
        fill="url(#blueGradient)" />
      <path
        d="M333.104 225.369C331.207 229.091 325.901 229.091 324.132 225.369L231.218 29.8272C229.639 26.5051 232.124 22.6197 235.828 22.6197L428.403 22.6197C432.106 22.6197 434.457 26.5051 432.764 29.8272L333.104 225.369Z"
        fill="#101828" />
    </svg>
  )
}