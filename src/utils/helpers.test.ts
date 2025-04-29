import { simplifyAppEntry, searchAndFilter, safeGetCache, safeSetCache } from './helpers';
import { rawApp, topTenApps } from '@/utils/__mocks__/mockData';

describe('simplifyAppEntry', () => {
  it('simplifies raw app correctly', () => {
    const result = simplifyAppEntry(rawApp);
    expect(result).toMatchObject({
      id: '1089079153',
      name: 'Garena 傳說對決：命運共織版本',
      summary:
        '《Garena 傳說對決》由 Garena 與騰訊天美工作室所合作開發，是一款最刺激的10人決戰MOBA手遊。遊戲強調英雄搭配、裝備選擇、技能施放、走位操作、公平對戰，並具有細膩的畫風與高品質的遊戲畫面，再加上內建語音系統方便隊友隨時溝通，是一款不能不玩的 5v5 公平團戰 MOBA 手遊！\n\n-- 遊戲特色 --\n\n【吃兵、推塔、拆主堡】：上中下三路推塔、忠實還原經典玩法，展現你的 MOBA 王者實力！\n\n【公平對戰、隨時開團】：遊戲中不販售任何可能影響英雄強弱與戰局勝敗的物品，享受絕對公平的對戰環境，想當 MOBA 王者不需花大錢！\n\n【十分鐘一場極速對戰】：平均十分鐘一場的 MOBA 團戰，無論你在捷運、公車、甚至下課空檔都可以操控你的英雄大戰一場，搶當 Rank 王者！\n\n【多種模式，豐富玩法】： 5v5 團戰、3v3 風暴峽谷、1v1 單挑、5v5 隨機單中、或是挑戰 Rank 王者，選擇你的英雄瘋狂激鬥吧！更多特殊玩法更讓你跟隊友欲罷不能，非玩不可！\n\n【內建語音，即時溝通】：內建語音系統，團戰激鬥時不用再打字，直接溝通即時更換戰略！\n\n【獨特英雄，專屬技能】：超過一百位英雄在各自領域皆具備精美畫風與獨一無二的技能組設定，精通所有英雄才能知己知彼、百戰不殆！\n\n-- 聯繫我們 --\n\nGarena 傳說對決官網：https://moba.garena.tw\n\nFacebook 粉絲團：Garena 傳說對決\n\n-- 注意事項 --\n\n※ 本遊戯部分內容涉及性、暴力、棋奕、交友之情節，依遊戯軟體分級管理辦法分類為輔 12 級。\n\n※ 本遊戲由新加坡商競舞電競有限公司臺灣分公司代理營運。\n\n※ 本遊戲為免費使用，但遊戲內部分內容或服務需另行支付其他費用。\n\n※ 請注意遊戲時間，避免迷於遊戲，可能影響身心健康。',
      title: 'Garena 傳說對決：命運共織版本 - Garena Online Private Ltd',
      imageSizes: [
        {
          src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/33/d1/6d/33d16d71-34ae-d59e-6de5-4d6e20c396a7/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/53x53bb.png',
          height: '53',
        },
        {
          src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/33/d1/6d/33d16d71-34ae-d59e-6de5-4d6e20c396a7/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/75x75bb.png',
          height: '75',
        },
        {
          src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/33/d1/6d/33d16d71-34ae-d59e-6de5-4d6e20c396a7/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/100x100bb.png',
          height: '100',
        },
      ],
      price: {
        amount: '0',
        currency: 'TWD',
      },
      category: '遊戲',
    });
  });
});

describe('searchAndFilter', () => {
  it('returns apps name and numbers, if [name, summary, title] containing keyword', () => {
    const match_PT = searchAndFilter(topTenApps, 'PT');
    expect(match_PT).toHaveLength(2);
    expect(match_PT[1].name).toBe('LastWar:Survival');

    const match_game = searchAndFilter(topTenApps, 'game');
    expect(match_game).toHaveLength(2);
    expect(match_game[1].name).toBe('寒霜啟示錄');

    const match_glb = searchAndFilter(topTenApps, '全球');
    expect(match_glb).toHaveLength(4);
    expect(match_glb[2].name).toBe('YouTube');

    const match_fun = searchAndFilter(topTenApps, '娛樂');
    expect(match_fun).toHaveLength(3);
    expect(match_fun[2].name).toBe('LINE');
  });

  it('returns empty array if [name, summary, title] no match', () => {
    const result = searchAndFilter(topTenApps, 'music');
    expect(result).toEqual([]);
  });
});

describe('safeGetCache / safeSetCache', () => {
  const key = 'apps-recommended';
  const mockData = [{ name: 'App' }];
  const now = Date.now();

  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(global.Date, 'now').mockImplementation(() => now);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('safeSetCache() stores cache correctly', () => {
    safeSetCache(key, mockData);

    const result = localStorage.getItem(key);
    expect(result).not.toBeNull();

    const parsed = JSON.parse(result!) as { timestamp: number; data: [] };
    expect(parsed.data).toEqual(mockData);
  });

  it('safeSetCache() catches error if localStorage.setItem throws', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('mocked setItem error');
    });

    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    safeSetCache(key, mockData);

    expect(warnSpy).toHaveBeenCalledWith(`Failed to set cache for key "${key}":`, expect.any(Error));

    warnSpy.mockRestore();
  });

  it('safeGetCache() retrieves cache correctly', () => {
    localStorage.setItem(key, JSON.stringify({ timestamp: now - 2000, data: mockData }));
    const result = safeGetCache<typeof mockData>(key, 2000);
    expect(result).toEqual(mockData);
  });

  it('safeGetCache() returns null if no cache exists for given key', () => {
    localStorage.removeItem(key);
    const result = safeGetCache<typeof mockData>(key);
    expect(result).toBeNull();
  });

  it('safeGetCache() returns null if cache expired', () => {
    localStorage.setItem(key, JSON.stringify({ timestamp: now - 2000, data: mockData }));
    const result = safeGetCache<typeof mockData>(key, 1000);
    expect(result).toBeNull();
  });

  it('safeGetCache() returns null for invalid JSON', () => {
    localStorage.setItem(key, 'INVALID_JSON');
    const result = safeGetCache<typeof mockData>(key);
    expect(result).toBeNull();
  });

  it('safeGetCache() catches error if JSON.parse throws', () => {
    localStorage.setItem(key, 'not-a-json'); // 專門製造 parse 錯誤

    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = safeGetCache<typeof mockData>(key);

    expect(result).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith(`Failed to get cache for key "${key}":`, expect.any(Error));

    warnSpy.mockRestore();
  });

  it('safeGetCache() returns null if window is undefined', () => {
    const originalWindow = global.window;

    // @ts-ignore 模擬沒有window環境
    delete global.window;

    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = safeGetCache('some-key');

    expect(result).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith('localStorage not supported');

    // 還原 window
    global.window = originalWindow;
    warnSpy.mockRestore();
  });
});
