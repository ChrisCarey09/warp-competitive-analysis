# Authentication Setup Guide

This application requires Google OAuth for authentication. Only users with `@warp.dev` email addresses and `chriscarey09@gmail.com` are allowed to access the application.

## Setup Steps

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (or Google OAuth2 API)
4. Go to "Credentials" in the left sidebar
5. Click "Create Credentials" → "OAuth client ID"
6. Choose "Web application"
7. Add authorized redirect URIs:
   - For local development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://your-domain.com/api/auth/callback/google`

### 2. Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in the Google OAuth credentials:

```bash
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000  # Change to your production URL in production
NEXTAUTH_SECRET=your-nextauth-secret-here  # Generate a secure random string

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Generate NextAuth Secret

Generate a secure secret for production:

```bash
openssl rand -base64 32
```

## Access Control

The authentication system allows:
- Any email address ending with `@warp.dev`
- The specific email `chriscarey09@gmail.com`

To modify these restrictions, edit `/lib/auth.ts`:

```typescript
const ALLOWED_EMAILS = ["chriscarey09@gmail.com"]
const ALLOWED_DOMAINS = ["warp.dev"]
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. You should be redirected to the sign-in page
4. Try logging in with an authorized account

## Deployment

For production deployment:

1. Set the production environment variables in your hosting platform
2. Update `NEXTAUTH_URL` to your production domain
3. Add your production domain to Google OAuth authorized redirect URIs
4. Use a secure `NEXTAUTH_SECRET`

## Troubleshooting

- **"Invalid client" error**: Check that your Google Client ID and Secret are correct
- **Redirect URI mismatch**: Ensure the redirect URI in Google Console matches your domain
- **Access denied**: Verify the user's email is in the allowed list or has a `@warp.dev` domain
