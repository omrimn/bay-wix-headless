export const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = ["WIX_CLIENT_ID"];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!import.meta.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them.`
    );
  }
};

export function wixImageToHttpUrl(wixImageUrl: string) {
    const match = wixImageUrl.match(/^wix:image:\/\/v1\/([^\/]+)/);
    return match && match[1] ? `https://static.wixstatic.com/media/${match[1]}` : "https://static.wixstatic.com/media/df1e90_d47242c6b0ae4786857d5eacfc4d016e~mv2.jpg";
}

export function sortingMenu(menu: any){
  menu.sort((a: any, b: any)=>a.ordre - b.ordre)
  return menu;
}