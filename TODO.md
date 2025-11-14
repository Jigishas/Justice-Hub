# TODO: Fix Justice Hub Auth Issues

## Issues Identified
1. **CORS/Auth Errors (401/400)**: Backend CORS might not handle preflight or credentials properly.
2. **White Screen After Login**: Fade-out animation causing screen to stay faded if navigation fails.
3. **Registration Success Not Showing**: Success state not triggering or displaying.
4. **JS Error**: Uncaught TypeError in bundle, likely missing import or build issue.

## Tasks
- [x] Update Backend CORS in Backend/connect.js to properly handle preflight OPTIONS and credentials.
- [x] Adjust AuthContainer.jsx to prevent white screen by improving error handling and navigation.
- [x] Ensure SignupForm.jsx shows success state and handles errors properly.
- [x] Ensure LoginForm.jsx handles errors properly.
- [ ] Investigate and fix JS bundle error (check imports, dependencies).
- [ ] Test registration and login flows after fixes.

## Followup Steps
- Deploy backend changes to Render.
- Test frontend on Vercel.
- Verify auth flows work without errors.
