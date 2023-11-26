export const MOCK_DASHBOARDS = [
    {
        displayName: "Dashboard 1",
        id: "x1kna689andkahbk",
        starred: false
    },
    {
        displayName: "Dashboard 2",
        id: "kanolsL67aszm8",
        starred: false
    },
    {
        displayName: "Dashboard 3",
        id: "lsL67a78aNsad",
        starred: false
    },
    {
        displayName: "Dashboard 4",
        id: "sdllsL6yqiwwzm8",
        starred: false
    },
    {
        displayName: "Dashboard 5",
        id: "mlasioL67aszm8",
        starred: false
    }
];

export const dashboardAPI = {
  get() {
    return Promise.resolve(MOCK_DASHBOARDS);
  },
};