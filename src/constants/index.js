export const FACTORY_ADDRESS = '0xbA831e62ac14d8500cEF0367b14F383d7b1B1b0A'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  //  'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  //  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x996fd5e4500eeb8af930b12f4c215e0f9aa76562',
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xd364159f3f0ba87a993806c74f68b0a1fba72946',
  '0xcf4a5aefdc0b25ecefad43eefbd8021678cb3765',
  '0xc54269b4b98a84812e12f8e2392d41a1a3ea5f77',
  '0x27e9db81e49307687e6a9b1190825dd5c438b45e',
  '0x3e607a939fd243b8c1666d4aff3af4a52d536633',
  '0x85f81ace89ffafbde99ad7a2400f664a93d3c886',
  '0x2ad8bea457391fe67d4b66ea05adb4346b8c9748',
  '0x929ef9ae80fa0fe24713734f4a0f7ae79bb80dd5',
  '0x142c162777632c13fe019d9081383a30cb73c870'
]

export const pairIsBlacklisted = (token0Id, token1Id) => {
  return OVERVIEW_TOKEN_BLACKLIST.includes(token0Id) ||
    OVERVIEW_TOKEN_BLACKLIST.includes(token1Id);
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid UBQ pairings.'
