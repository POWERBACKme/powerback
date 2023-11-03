const handleMessage = (u, d) => {
  return (
    u &&
    d && (
      <>
        {` ${
          u && u.firstName && u.firstName !== ''
            ? `${u.firstName}, t`
            : ' T'
        }`}
        hank you for your{' '}
        <span className='alert-donation-amt'>{`$${d}`}</span> contribution!
      </>
    )
  );
};

export { handleMessage };
