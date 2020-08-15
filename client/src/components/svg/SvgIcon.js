import React, { Fragment } from "react";

const getViewBox = (name) => {
  switch (name) {
    case "map":
      return "0 0 24 24";
    case "marker":
      return "0 0 24 24";
    case "bed":
      return "0 0 191.886 191.886";
    case "bath":
      return "0 0 512 512";
    case "garage":
      return "0 0 302 302";
    case "ruler":
      return "0 0 60 60";
    case "c-card":
      return "0 0 20 20";
    case "search":
      return "0 0 20 20";
    case "train":
      return "0 0 20 20";
    case "close":
      return "0 0 20 20";
    case "filter":
      return "0 0 20 20";
    case "direction":
      return "0 0 20 20";
    case "hammer":
      return "0 0 20 20";
    case "status-square":
      return "0 0 20 20";
    case "tag":
      return "0 0 20 20";
    case "circle":
      return "0 0 100 100";
    case "list":
      return "0 0 20 20";
    case "pinterest":
      return "0 0 510 510";
    case "twitter":
      return "0 0 510 510";
    case "facebook":
      return "0 0 516.338 516.338";
    case "google+":
      return "0 0 510 510";
    case "plane":
      return "0 0 97.103 97.103";
    case "chevron-down":
      return "0 0 24 24";
    case "chevron-up":
      return "0 0 24 24";
    case "bullseye":
      return "0 0 24 24";
    case "sort":
      return "0 0 24 24";
    case "chat":
      return "0 0 24 24";
    case "timer":
      return "0 0 24 24";
    case "logo":
      return "0 0 236.5 318.1";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "sort":
      return (
        <path
          d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
          19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
        />
      );
    case "logo":
      return (
        <>
          <path
            d="M236.5 318.1L0 317.4V119L119 0l117.5 117.5v200.6zM22 295.4l192.5.6V126.6L119 31.1l-97 97v167.3z"
            fill="#c9d700"
          />
          <path
            d="M177.4 270.9H57.9V151.3h119.6v119.6zm-97.5-22h75.6v-75.6H79.9v75.6z"
            fill="#c9d700"
          />
        </>
      );
    case "timer":
      return (
        <g fill="none" fillRule="evenodd">
          <path d="M-2-2h28v28H-2z" />
          <path
            d="M15.5 23.667a8.167 8.167 0 110-16.334 8.167 8.167 0 010 16.334zm0-1.75a6.417 6.417 0 100-12.834 6.417 6.417 0 000 12.834z"
            fill="#333"
            fillRule="nonzero"
          />
          <path
            d="M15.5 17.833a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm0-1.166a1.167 1.167 0 100-2.334 1.167 1.167 0 000 2.334zM12.875.333h5.25c1.127 0 2.042.99 2.042 2.213v.242c0 1.221-.915 2.212-2.042 2.212h-5.25c-1.127 0-2.042-.99-2.042-2.212v-.242c0-1.222.915-2.213 2.042-2.213zm0 1.167c-.461 0-.875.448-.875 1.046v.242c0 .597.414 1.045.875 1.045h5.25c.461 0 .875-.448.875-1.045v-.242c0-.598-.414-1.046-.875-1.046h-5.25z"
            fill="#333"
            fillRule="nonzero"
          />
          <path
            fill="#333"
            fillRule="nonzero"
            d="M14.917 4.417v3.5h1.166v-3.5zM14.917 11.417v1.75a.583.583 0 101.166 0v-1.75a.583.583 0 10-1.166 0zM2.083 12H6.75a.583.583 0 100-1.167H2.083a.583.583 0 000 1.167zM2.083 20.75H6.75a.583.583 0 100-1.167H2.083a.583.583 0 000 1.167zM.917 16.083h4.666a.583.583 0 100-1.166H.917a.583.583 0 100 1.166z"
          />
        </g>
      );
    case "tag":
      return (
        <>
          <defs>
            <path
              d="M18.091 0l-6.238.031L11.83.03c-.303 0-.594.12-.809.334L.634 10.24a2.155 2.155 0 00.037 3.089l2.57 2.82 2.877 3.159c.42.398.959.597 1.497.597.55 0 1.1-.207 1.52-.62L19.66 8.649c.227-.223.35-.531.34-.85l-.024-5.955C19.945.919 19.02.019 18.09 0m-.02 1.4c.185.013.493.313.498.45l.025 5.88L8.15 18.287a.762.762 0 01-1.034.033l-2.834-3.112-2.569-2.82-.035-.037-.036-.035a.753.753 0 01-.236-.54.732.732 0 01.199-.523L11.934 1.43l6.136-.03zm-2.8 1.392c-1.076 0-1.95.875-1.95 1.951s.874 1.951 1.95 1.951a1.954 1.954 0 001.951-1.951 1.954 1.954 0 00-1.952-1.951zm0 .8a1.152 1.152 0 010 2.302 1.15 1.15 0 010-2.302z"
              id="c"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="d" fill="#fff">
              <use href="#c" />
            </mask>
            <use fill="#333" href="#c" />
            <g mask="url(#d)" fill="#333">
              <path d="M-2-2h24v24H-2z" />
            </g>
          </g>
        </>
      );
    case "status-square":
      return (
        <>
          <defs>
            <path
              d="M18 0c1.104 0 2 .9 2 2.008v15.984c0 1.11-.896 2.008-2 2.008H2a2.004 2.004 0 01-2-2.008V2.008C0 .899.896 0 2 0zm0 1.405H2a.6.6 0 00-.6.603v15.984a.6.6 0 00.6.602H18c.33 0 .6-.27.6-.602V2.008a.602.602 0 00-.6-.603zM9.177 6.007a.503.503 0 01.436.264l3.24 6.053 1.195-3.15a.499.499 0 01.467-.324h2.135a.501.501 0 010 1.004h-1.79l-1.463 3.854a.5.5 0 01-.435.322l-.032.001a.499.499 0 01-.44-.264L9.162 7.551l-2.37 4.242a.499.499 0 01-.433.257h-.001a.5.5 0 01-.436-.255l-1.203-2.14H3.27a.501.501 0 010-1.003H5.01a.5.5 0 01.436.255l.909 1.618 2.382-4.261c.089-.16.263-.227.44-.257z"
              id="a"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <mask id="b" fill="#fff">
              <use href="#a" />
            </mask>
            <g mask="url(#b)" fill="#333">
              <path d="M-2-2h24v24H-2z" />
            </g>
          </g>
        </>
      );
    case "hammer":
      return (
        <Fragment>
          <defs>
            <path
              d="M19.918 12.95c-.525.685-1.493 1.607-1.485 1.607-.17.12-.493.243-.58.166-.406-.369-1.255-1.238-1.637-1.63l.024-1.09a.668.668 0 00-.211-.5c-.517-.486-1.563-.476-2.367.333l-1.318 1.086-1.893-1.808.927-1.264c.395-.541.876-1.833-.139-2.849-.537-.536-2.277-2.447-3.277-3.607 1.517.272 4.021 1.132 5.513 2.293 1.317 1.023 2.58 2.394 3.142 3.032a1.184 1.184 0 00.14 1.546.665.665 0 00.389.18l1.211.13 1.557 1.557c.07.135.235.519.004.819M8.034 17.51l-2.611 2.556c-.117.114-.287.251-.43.251h-.004c-.147-.002-.32-.15-.46-.293l-1.29-1.182c-.407-.424-.333-.663-.074-.927l6.158-6.035 2.257 2.154a1042.232 1042.232 0 01-3.546 3.476m12.97-6.156a.822.822 0 00-.085-.104l-1.785-1.786a.676.676 0 00-.4-.191l-.832-.089c.177-.406.115-.89-.19-1.241-.663-.759-1.987-2.199-3.418-3.31-1.935-1.504-5.018-2.44-6.59-2.625a1.166 1.166 0 00-1.17.61 1.17 1.17 0 00.138 1.316c.953 1.132 3.004 3.39 3.623 4.01.443.442.08 1.013.007 1.117l-1.274 1.734c-.018.025-.024.054-.04.08L2.493 17.24c-.681.69-.659 1.515.081 2.283l1.29 1.182c.36.374.724.559 1.112.565h.016c.376 0 .744-.177 1.099-.525l2.61-2.554a863.068 863.068 0 003.82-3.747.672.672 0 00.214-.118l1.822-1.505a1.36 1.36 0 01.337-.253l-.017.773a.663.663 0 00.187.476c.054.056 1.33 1.38 1.893 1.892.293.266.627.368.957.368.518 0 1.029-.247 1.365-.493.045-.042 1.093-1.035 1.697-1.823.685-.892.34-1.932.029-2.407"
              id="f"
            />
          </defs>
          <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
            <mask id="e" fill="#fff">
              <use href="#f" />
            </mask>
            <use fill="#333" href="#f" />
            <g mask="url(#e)" fill="#333">
              <path d="M0 0h24v24H0z" />
            </g>
          </g>
        </Fragment>
      );
    case "direction":
      return (
        <Fragment>
          <defs>
            <path
              d="M18.542 7.98H7.14a.258.258 0 01-.044-.157V5.12c0-.08.026-.132.044-.156h11.402l1.803 1.507-1.803 1.508zM16.92 12.76v2.816a.256.256 0 01-.044.156H5.487l-1.84-1.6 1.826-1.528h11.402a.261.261 0 01.044.156zm4.79-6.98l-2.66-2.226h-6.252v-.85a.702.702 0 00-.7-.705.702.702 0 00-.7.704v.851h-4.3c-.774 0-1.4.7-1.4 1.565v2.703c0 .864.626 1.565 1.4 1.565h4.3v1.81h-6.43l-2.675 2.238a.962.962 0 00-.012 1.37l2.686 2.335h6.438v4.155c0 .388.314.704.701.704.386 0 .7-.316.7-.704v-4.155h4.114c.773 0 1.4-.7 1.4-1.564V12.76c0-.863-.627-1.564-1.4-1.564h-4.122v-1.81h6.252l2.66-2.225c.39-.358.39-1.023 0-1.38z"
              id="z"
            />
          </defs>
          <use
            fill="#333"
            href="#z"
            transform="translate(-2 -2)"
            fillRule="evenodd"
          />
        </Fragment>
      );
    case "chat":
      return (
        <g fill="none" fillRule="evenodd">
          <path d="M-2-2h28v28H-2z" />
          <path
            d="M23.667 16.733c0-3.291-3.157-5.9-7-5.9s-7 2.609-7 5.9c0 3.292 3.157 5.9 7 5.9.238 0 .531-.025.891-.071.122-.016.25-.033.39-.054.46-.067.637-.093.676-.108l.096.056c.162.088.309.176.735.44 1.314.818 1.51.907 2.01.692.404-.174.572-.566.515-.972a1.688 1.688 0 00-.138-.446 8.082 8.082 0 00-.382-.732 28.154 28.154 0 01-.156-.28c1.49-1.109 2.363-2.707 2.363-4.425zm-3.596 5.173a15.266 15.266 0 00-.793-.475l-.14-.082a1.027 1.027 0 00-.288-.107c-.161-.034-.481.014-1.072.112-.134.02-.254.036-.368.05-.315.041-.565.063-.743.063-3.243 0-5.834-2.141-5.834-4.734 0-2.592 2.59-4.733 5.834-4.733 3.242 0 5.833 2.14 5.833 4.733 0 1.459-.823 2.83-2.247 3.732l.02.032c-.243.114-.253.184-.296.485.023.161.023.161.046.218.034.076.034.076.053.11l.007.014c.071.162.15.311.359.684l.106.192a59.079 59.079 0 01-.477-.294z"
            fill="#333"
            fillRule="nonzero"
          />
          <path
            d="M3.874 16.528c.085-.198.178-.381.463-.904.28-.515.386-.719.48-.937l.013-.028.003-.004c.024-.047.044-.09.061-.133.025-.06.025-.06.047-.22-.04-.297-.048-.366-.294-.483l.021-.034C2.665 12.481 1.5 10.49 1.5 8.36c0-3.773 3.638-6.86 8.167-6.86 4.528 0 8.166 3.087 8.166 6.86 0 .55-.053.932-.2 1.45a.583.583 0 101.122.319A5.93 5.93 0 0019 8.36C19 3.896 14.8.333 9.667.333 4.533.333.333 3.896.333 8.36c0 2.387 1.216 4.608 3.291 6.122-.068.134-.162.31-.311.584-.302.554-.408.76-.512 1.004-.09.212-.146.388-.17.56-.064.469.12.91.572 1.11.586.26.848.137 2.555-.953.585-.373.787-.498 1.013-.624a5.48 5.48 0 00.137-.082c-.001.02.03.035-.017.017l-.018-.007c.15.055.258.093.4.135.464.14.951.221 1.483.221a.583.583 0 000-1.166 3.94 3.94 0 01-1.148-.172c.064.02-.663-.254-.877-.207a1.18 1.18 0 00-.338.128c-.037.021-.161.098-.192.115-.251.14-.467.274-1.07.659-.714.455-1.05.66-1.278.773l.021-.05z"
            fill="#333"
            fillRule="nonzero"
          />
        </g>
      );
    case "bullseye":
      return (
        <g fill="none" fillRule="evenodd">
          <path d="M-2-2h28v28H-2z" />
          <g fill="#333" fillRule="nonzero">
            <path d="M13.462 19.91l2.356 3.5a.583.583 0 00.968-.652l-2.356-3.5a.583.583 0 00-.968.651zM4.04 19.258l-2.357 3.5a.583.583 0 00.968.651l2.356-3.5a.583.583 0 10-.968-.651z" />
            <path d="M9.083 21.917a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5zm0-1.75a7 7 0 110-14 7 7 0 010 14z" />
            <path d="M9.083 19a5.833 5.833 0 100-11.667 5.833 5.833 0 000 11.667zm0-1.167a4.667 4.667 0 110-9.333 4.667 4.667 0 010 9.333z" />
            <path d="M9.083 16.667a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1.167a2.333 2.333 0 110-4.667 2.333 2.333 0 010 4.667z" />
          </g>
          <g fill="#333" fillRule="nonzero">
            <path d="M23.704 4.112l-3.8 3.188c-1.024.86-2.12.641-3.137-.571-1.017-1.213-1.042-2.33-.017-3.189l3.8-3.188.067 3.146 3.087.614zm-2.614.67l-1.62-.322-.035-1.65L17.5 4.434c-.482.404-.478.784.16 1.545.64.761 1.013.831 1.494.427l1.936-1.624z" />
            <path d="M16.65 6.132l-7.934 6.421a.583.583 0 00.734.907l7.934-6.42a.583.583 0 00-.734-.908z" />
          </g>
        </g>
      );
    case "circle":
      return <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="12" />;
    case "close":
      return (
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
      );
    case "list":
      return (
        <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
      );
    case "filter":
      return (
        <path d="M2.3 7.7A1 1 0 0 1 2 7V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-.3.7L15 14.42V17a1 1 0 0 1-.3.7l-4 4A1 1 0 0 1 9 21v-6.59l-6.7-6.7zM4 4v2.59l6.7 6.7a1 1 0 0 1 .3.71v4.59l2-2V14a1 1 0 0 1 .3-.7L20 6.58V4H4z" />
      );
    case "map":
      return (
        <path d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z" />
      );
    case "marker":
      return (
        <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      );
    case "bed":
      return (
        <path
          {...props}
          d="M189.386 156.13h-14.317a2.5 2.5 0 01-2.5-2.5v-18.441H20.503v18.441a2.5 2.5 0 01-2.5 2.5H2.5a2.5 2.5 0 01-2.5-2.5V38.255a2.5 2.5 0 012.5-2.5h15.503a2.5 2.5 0 012.5 2.5v34.288a11.438 11.438 0 016.5-2.018h30.995c6.341 0 11.5 5.159 11.5 11.5v3.336c0 2.41-.745 4.649-2.018 6.5h105.088V69.075a2.5 2.5 0 012.5-2.5h14.317a2.5 2.5 0 012.5 2.5v84.556a2.498 2.498 0 01-2.499 2.499zm-11.818-5h9.317V71.575h-9.317v79.555zM5 151.13h10.503V40.755H5V151.13zm15.503-20.941h152.065v-8.829H20.503v8.829zm0-13.829h152.065V96.862H20.503v19.498zm6.5-24.498h30.995c3.584 0 6.5-2.916 6.5-6.5v-3.336c0-3.584-2.916-6.5-6.5-6.5H27.003a6.508 6.508 0 00-6.5 6.5v3.336c0 3.584 2.916 6.5 6.5 6.5z"
        />
      );
    case "bath":
      return (
        <Fragment>
          <path
            {...props}
            d="M402.574 193.109l-96.077-72.047C302.811 53.769 247.396 0 179.197 0c-70.579 0-128 57.429-128 128v371.2c0 7.074 5.726 12.8 12.8 12.8s12.8-5.726 12.8-12.8V128c0-56.457 45.926-102.4 102.4-102.4 54.434 0 98.645 42.803 101.803 96.452l-96.683 72.499c-4.429 3.302-6.204 9.062-4.471 14.285a12.823 12.823 0 0012.151 8.747h204.8c.179.009.375 0 .503 0 7.074 0 12.8-5.726 12.8-12.8a12.762 12.762 0 00-7.526-11.674zm-172.177-1.118l64-48 64 48h-128z"
          />
          <path
            {...props}
            d="M159.895 425.975c-6.929-1.766-13.824 2.338-15.599 9.148l-15.872 60.843c-1.801 6.852 2.304 13.841 9.148 15.625 1.075.273 2.176.41 3.226.41 5.7 0 10.871-3.814 12.373-9.566l15.872-60.843c1.8-6.844-2.296-13.833-9.148-15.617zM185.469 327.962c-6.801-1.724-13.824 2.313-15.599 9.148l-8.55 32.717c-1.801 6.835 2.304 13.841 9.148 15.625 1.075.273 2.15.41 3.226.41 5.7 0 10.871-3.814 12.373-9.566l8.55-32.717c1.8-6.837-2.296-13.834-9.148-15.617zM210.02 233.847c-6.903-1.766-13.824 2.338-15.599 9.148l-8.252 31.616c-1.801 6.852 2.304 13.841 9.148 15.625 1.075.273 2.176.41 3.226.41 5.7 0 10.871-3.814 12.373-9.566l8.252-31.616c1.8-6.844-2.296-13.833-9.148-15.617zM248.147 442.146c-6.904-.7-13.252 4.599-13.85 11.639l-3.849 44.305c-.623 7.049 4.599 13.252 11.648 13.867.375.034.751.043 1.126.043 6.554 0 12.151-5.026 12.723-11.691l3.849-44.305c.632-7.04-4.599-13.243-11.647-13.858zM258.446 323.831c-6.801-.572-13.227 4.599-13.85 11.639l-7.228 83.106c-.623 7.049 4.599 13.252 11.648 13.867.375.034.751.051 1.126.051 6.554 0 12.151-5.026 12.723-11.691l7.228-83.106c.633-7.047-4.598-13.251-11.647-13.866zM266.22 234.172c-6.946-.7-13.227 4.599-13.85 11.648l-3.55 41.054c-.597 7.04 4.599 13.235 11.648 13.85.375.034.751.051 1.126.051 6.554 0 12.151-5.026 12.723-11.699l3.55-41.054c.607-7.041-4.59-13.244-11.647-13.85zM358.346 498.082l-2.603-29.867c-.614-7.04-7.091-12.39-13.841-11.631-7.049.614-12.279 6.81-11.648 13.867l2.603 29.867c.572 6.656 6.17 11.682 12.715 11.682.375 0 .751-.008 1.126-.051 7.049-.615 12.279-6.81 11.648-13.867zM350.871 412.271l-4.847-56.013c-.623-7.066-7.074-12.399-13.85-11.648-7.049.614-12.254 6.81-11.648 13.85l4.847 56.013c.572 6.673 6.178 11.699 12.723 11.699.375 0 .751-.009 1.126-.051 7.049-.615 12.255-6.81 11.649-13.85zM341.646 306.039l-5.325-61.329c-.623-7.049-7.049-12.348-13.85-11.639-7.049.614-12.279 6.81-11.648 13.867l5.325 61.329c.572 6.664 6.178 11.691 12.723 11.691.375 0 .751-.009 1.126-.051 7.05-.615 12.281-6.81 11.649-13.868zM460.379 495.966l-22.477-86.135c-1.775-6.81-8.653-10.923-15.599-9.148-6.852 1.784-10.948 8.772-9.148 15.625l22.477 86.135c1.493 5.743 6.673 9.557 12.373 9.557 1.05 0 2.15-.136 3.226-.41 6.844-1.792 10.949-8.78 9.148-15.624zM420.349 342.485l-10.129-38.793c-1.775-6.801-8.704-10.948-15.599-9.148-6.852 1.784-10.948 8.772-9.148 15.625l10.129 38.793c1.502 5.751 6.673 9.566 12.373 9.566 1.05 0 2.15-.137 3.226-.41 6.853-1.8 10.949-8.78 9.148-15.633zM400.577 266.718l-8.474-32.478c-1.775-6.81-8.678-10.923-15.599-9.148a12.777 12.777 0 00-9.148 15.625l8.474 32.478c1.502 5.751 6.673 9.566 12.373 9.566 1.05 0 2.15-.145 3.226-.418 6.853-1.784 10.949-8.773 9.148-15.625z"
          />
        </Fragment>
      );
    case "garage":
      return (
        <path d="M295 59.886H7a7 7 0 00-7 7v168.229a7 7 0 007 7h26a7 7 0 007-7v-35.229h34.333v7c0 9.246 6.422 17.001 15.034 19.093.722 3.097 3.494 5.407 6.811 5.407h14.5a7 7 0 006.654-4.833h67.336a7 7 0 006.654 4.833h14.5c3.317 0 6.089-2.31 6.811-5.407 8.612-2.091 15.034-9.847 15.034-19.093v-7H262v35.229a7 7 0 007 7h26a7 7 0 007-7V66.886a7 7 0 00-7-7zm-81.333 147a5.673 5.673 0 01-5.667 5.667H94a5.673 5.673 0 01-5.667-5.667v-7h10.124c.595 3.132 3.343 5.501 6.648 5.501s6.053-2.369 6.649-5.501h78.492c.596 3.132 3.344 5.501 6.649 5.501s6.053-2.369 6.648-5.501h10.124v7zm7-21H40v-5.333h222v5.333h-41.333zm41.333-44v5.333H40v-5.333h222zm0 19.333v5.333H40v-5.333h222zm0-38.666v5.333H40v-5.333h222zm0-14H40v-5.667h222v5.667zm26 119.561h-12V95.886a7 7 0 00-7-7H33a7 7 0 00-7 7v132.229H14V73.886h274v154.228z" />
      );
    case "ruler":
      return (
        <path
          {...props}
          d="M19 0H0v60h16V19h3v-3h41V0H19zm-5 23h-3a1 1 0 100 2h3v4H8a1 1 0 100 2h6v4h-3a1 1 0 100 2h3v4H8a1 1 0 100 2h6v4h-3a1 1 0 100 2h3v4H8a1 1 0 100 2h6v3H2V19h12v4zm3-6H2V2h15v15zm41-3h-3V8a1 1 0 10-2 0v6h-4v-3a1 1 0 10-2 0v3h-4V8a1 1 0 10-2 0v6h-4v-3a1 1 0 10-2 0v3h-4V8a1 1 0 10-2 0v6h-4v-3a1 1 0 10-2 0v3h-4V2h39v12z"
        />
      );
    case "c-card":
      return (
        <path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm4 8h4v2H4v-2z" />
      );
    case "search":
      return (
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
      );
    case "train":
      return (
        <path d="M12 18H8l-2 2H3l2-2a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM8 2v1h4V2H8z" />
      );
    case "pinterest":
      return (
        <path d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM280.5 362.1c-20.4 0-40.8-7.649-53.55-22.949l-25.5 81.6-2.55 5.1c-5.1 7.65-12.75 12.75-22.95 12.75-15.3 0-28.05-12.75-28.05-28.05v-2.55l2.55-5.1 45.9-142.801s-5.1-15.3-5.1-38.25c0-43.35 22.95-56.1 43.35-56.1 17.85 0 35.7 7.65 35.7 33.15 0 33.15-22.95 51-22.95 76.5 0 17.85 15.3 33.149 33.15 33.149 58.65 0 81.6-45.899 81.6-86.7 0-56.1-48.449-102-107.1-102-58.65 0-107.1 45.9-107.1 102 0 17.85 5.1 33.15 12.75 48.45 2.55 5.101 2.55 7.65 2.55 12.75 0 15.3-10.2 25.5-25.5 25.5-10.2 0-17.85-5.1-22.95-12.75-12.75-22.95-20.4-48.45-20.4-76.5 0-84.15 71.4-153 158.1-153s158.1 68.85 158.1 153C413.1 290.7 372.3 362.1 280.5 362.1z" />
      );
    case "twitter":
      return (
        <path d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zm-58.65 186.15c-2.55 117.3-76.5 198.9-188.7 204-45.9 2.55-79.05-12.75-109.65-30.6 33.15 5.101 76.5-7.649 99.45-28.05-33.15-2.55-53.55-20.4-63.75-48.45 10.2 2.55 20.4 0 28.05 0-30.6-10.2-51-28.05-53.55-68.85 7.65 5.1 17.85 7.65 28.05 7.65-22.95-12.75-38.25-61.2-20.4-91.8 33.15 35.7 73.95 66.3 140.25 71.4-17.85-71.4 79.051-109.65 117.301-61.2 17.85-2.55 30.6-10.2 43.35-15.3-5.1 17.85-15.3 28.05-28.05 38.25 12.75-2.55 25.5-5.1 35.7-10.2-2.551 12.75-15.301 22.95-28.051 33.15z" />
      );
    case "facebook":
      return (
        <path d="M497.446 0H18.893C8.458 0 .006 8.458.006 18.893v478.554c0 10.435 8.458 18.893 18.886 18.893h93.869V316.135c0-6.763-5.484-12.24-12.24-12.24H81.169c-6.756 0-12.24-5.477-12.24-12.239v-48.74c0-6.762 5.483-12.24 12.24-12.24h19.352c6.756 0 12.24-5.478 12.24-12.24v-31.842c0-31.279 7.387-54.958 22.172-71.028 14.78-16.078 39.101-24.113 72.963-24.113h46.279c6.762 0 12.24 5.478 12.24 12.24v48.74c0 6.763-5.478 12.24-12.24 12.24h-24.37c-6.702 0-12.075.557-16.114 1.677-4.039 1.12-6.964 3.139-8.764 6.059-1.805 2.925-2.968 5.888-3.482 8.893-.514 3.011-.771 7.264-.771 12.766v24.37c0 6.763 5.483 12.24 12.24 12.24h41.781c6.756 0 11.665 5.447 10.955 12.173l-5.165 48.875c-.71 6.72-6.763 12.172-13.525 12.172h-34.045c-6.757 0-12.24 5.478-12.24 12.24v200.204h296.771c10.435 0 18.887-8.458 18.887-18.893V18.893C516.333 8.458 507.88 0 497.446 0z" />
      );
    case "google+":
      return (
        <path d="M234.6 175.95c0-25.5-15.3-76.5-53.55-76.5-15.3 0-33.15 10.2-33.15 43.35 0 30.6 15.3 73.95 51 73.95 0 0 35.7-2.55 35.7-40.8zM219.3 300.9h-7.65c-7.65 0-30.6 2.55-45.9 7.649C147.9 313.65 127.5 326.4 127.5 351.9c0 28.05 25.5 56.1 76.5 56.1 38.25 0 61.2-25.5 61.2-51 0-17.85-12.75-30.6-45.9-56.1zM459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM181.05 438.6c-71.4 0-104.55-40.8-104.55-76.5 0-12.75 2.55-40.8 38.25-61.199 20.4-12.75 45.9-20.4 79.05-22.95-5.1-5.101-7.65-12.75-7.65-25.5 0-5.1 0-7.65 2.55-12.75h-10.2c-51 0-81.6-38.25-81.6-76.5 0-43.35 33.15-91.8 104.55-91.8h107.1l-7.649 7.65L283.05 96.9l-2.55 2.55h-17.85c10.199 10.2 22.949 28.05 22.949 56.1 0 35.7-17.85 53.55-40.8 68.85-5.1 2.55-10.2 10.2-10.2 17.85s5.1 12.75 10.2 15.3c2.55 2.55 7.65 5.101 12.75 7.65 20.4 15.3 48.45 33.149 48.45 73.95.001 45.9-33.149 99.45-124.949 99.45zM433.5 255h-51v51H357v-51h-51v-25.5h51v-51h25.5v51h51V255z" />
      );
    case "plane":
      return (
        <path d="M93.82.37A2.17 2.17 0 0091.5.304L3.388 52.585a2.172 2.172 0 00.525 3.957l22.389 6.233c.68.188 1.409.036 1.956-.41l35.768-29.219-24.951 31.847a2.162 2.162 0 00-.462 1.339v28.602a2.167 2.167 0 002.17 2.17c.728 0 1.425-.366 1.83-1.004L58.19 71.65l22.772 6.338a2.176 2.176 0 002.731-1.77l11.06-73.725A2.17 2.17 0 0093.82.37z" />
      );
    case "chevron-down":
      return (
        <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
      );
    case "chevron-up":
      return (
        <path d="M8.7 14.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 11.42l-3.3 3.3z" />
      );
    default:
      return <path />;
  }
};

const SvgIcon = ({ name = "", className = "" }) => {
  return (
    <svg name={name} viewBox={getViewBox(name)} className={className}>
      {getPath(name, {})}
    </svg>
  );
};

export default SvgIcon;
