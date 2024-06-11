export function middleware(req) {
  console.log("middleware");
}

export const config = {
  matcher: "/todo-list",
};
