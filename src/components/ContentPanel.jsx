import className from 'classnames';

const ContentPanel = ({ children, title, subtitle, desc, ...rest }) => {
  const classes = className(rest.className, 'w-full px-4');
  return (
    <div {...rest} className={classes}>
      <span className="font-bold text-blue-500/100 text-lg md:text-xl mb-4 uppercase">
        {title}
      </span>
      <h2
        className="font-bold text-gray-900/100 text-3xl
    sm:text-4xl md:text-[45px] mb-5 max-w-md"
      >
        {subtitle}
      </h2>
      <p className="font-medium text-base text-gray-400/100 mb-10 max-w-[570px]">
        {desc}
      </p>
      {children}
    </div>
  );
};
export default ContentPanel;
