const { nanoid } = require('nanoid');
module.exports = {
  generate: async (type) => {
    const HASHING_DATE = Date.now();
    const { createHash } = await import('crypto');
    const hash = createHash('sha256');
    hash.on('readable', () => {
      const data = hash.read();
      if (data) {
        HASH = data.toString('hex').substring(18, 36);
        // e.g. 6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
      }
    });
    hash.write((HASHING_DATE + '.' + nanoid()).toString('hex'));
    hash.end();
    const hashObj = {
      hash: HASH,
      issueDate: HASHING_DATE,
      expires: HASHING_DATE + (type === 'signup' ? 300000 : 86400000),
    };
    return hashObj;
  },
};
