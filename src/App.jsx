import React from 'react'
import { Container, Stack, Box, Typography, Paper, Link, IconButton, Tooltip, Avatar, Divider } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import SchoolIcon from '@mui/icons-material/School'
import ArticleIcon from '@mui/icons-material/Article'
import HomeIcon from '@mui/icons-material/Home'
import { profile, publications, experiences } from './data'
import avatarImg from './assets/ avatar.jpg'

const cardSx = {
  p: 3,
  bgcolor: '#fff',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
}

function renderBioLine(item, idx) {
  if (item.link) {
    return (
      <Typography key={idx} variant="body1" sx={{ lineHeight: 1.8, color: '#333' }}>
        {item.text}{' '}
        <Link href={item.link.url} target="_blank" rel="noopener" underline="hover" sx={{ color: '#1976d2', fontWeight: 600 }}>
          {item.link.label}
        </Link>
        {item.suffix}
      </Typography>
    )
  }

  const parts = item.text.split(/(\*\*.*?\*\*)/)
  return (
    <Typography key={idx} variant="body1" sx={{ lineHeight: 1.8, color: '#333' }}>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} style={{ color: '#111' }}>{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </Typography>
  )
}

const PublicationCard = ({ pub }) => (
  <Paper elevation={0} sx={cardSx}>
    <Typography variant="h6" fontWeight={800} gutterBottom sx={{ lineHeight: 1.4, color: '#111' }}>
      {pub.title}
    </Typography>
    <Typography variant="body1" gutterBottom sx={{ lineHeight: 1.7, color: '#424242', mt: 1 }}>
      {pub.authors.split(profile.name).flatMap((segment, i, arr) =>
        i < arr.length - 1
          ? [segment, <strong key={i} style={{ color: '#111' }}>{profile.name}</strong>]
          : [segment],
      )}
    </Typography>
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1.5 }}>
      <Typography variant="body2" fontStyle="italic" color="text.secondary" sx={{ fontWeight: 500 }}>
        {pub.venue}
      </Typography>
      <Stack direction="row" spacing={1}>
        {pub.home_page && (
          <Tooltip title="Project Page">
            <IconButton
              component="a"
              href={pub.home_page}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: '#1976d2', bgcolor: 'rgba(25, 118, 210, 0.08)', '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.15)' } }}
            >
              <HomeIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {pub.paper && (
          <Tooltip title="Paper">
            <IconButton
              component="a"
              href={pub.paper}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: '#d32f2f', bgcolor: 'rgba(211, 47, 47, 0.08)', '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.15)' } }}
            >
              <ArticleIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {pub.github && (
          <Tooltip title="Code">
            <IconButton
              component="a"
              href={pub.github}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: '#333', bgcolor: 'rgba(0, 0, 0, 0.05)', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' } }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Stack>
  </Paper>
)

const ExperienceCard = ({ exp }) => (
  <Paper elevation={0} sx={cardSx}>
    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 1 }}>
      <Typography variant="body1" fontWeight={700}>
        {exp.role}
      </Typography>
      <Typography
        variant="body2"
        fontStyle="italic"
        color="text.secondary"
        sx={{ flexShrink: 0, ml: 2 }}
      >
        {exp.period}
      </Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 1 }}>
      <Link variant="body1" href={exp.institutionUrl} target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: 700, color: '#1976d2' }}>
        {exp.institution}
      </Link>
      <Typography
        variant="body2"
        fontStyle="italic"
        color="text.secondary"
        sx={{ flexShrink: 0, ml: 2 }}
      >
        {exp.location}
      </Typography>
    </Stack>
    <Typography variant="body2" color="text.secondary">
      {exp.note}
    </Typography>
  </Paper>
)

/* ── Sidebar ── */
const Sidebar = () => (
  <Box sx={{ position: { md: 'sticky' }, top: { md: 48 } }}>
    <Avatar
      src={avatarImg}
      alt={profile.name}
      sx={{
        width: 160,
        height: 160,
        mb: 2.5,
        border: '3px solid #eaeaea',
        boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
      }}
    />

    <Typography variant="h4" fontWeight={800} sx={{ color: '#111', letterSpacing: '-0.01em' }}>
      {profile.name}
    </Typography>

    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
      Ph.D. Student
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
      HKUST (Guangzhou)
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
      Guangzhou, China
    </Typography>

    <Divider sx={{ my: 2.5 }} />

    <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#111' }}>
      Research
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
      World Models, Vision-Language-Action Models, 3D/4D Generation
    </Typography>

    <Divider sx={{ my: 2.5 }} />

    <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5, color: '#111' }}>
      Links
    </Typography>
    <Stack spacing={1.2}>
      <Link
        href={`mailto:${profile.email}`}
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#1976d2', fontWeight: 500, fontSize: '0.9rem' }}
      >
        <EmailIcon sx={{ fontSize: 18 }} />
        Email
      </Link>
      <Link
        href={profile.github}
        target="_blank"
        rel="noopener"
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#1976d2', fontWeight: 500, fontSize: '0.9rem' }}
      >
        <GitHubIcon sx={{ fontSize: 18 }} />
        GitHub
      </Link>
      <Link
        href={profile.googleScholar}
        target="_blank"
        rel="noopener"
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#1976d2', fontWeight: 500, fontSize: '0.9rem' }}
      >
        <SchoolIcon sx={{ fontSize: 18 }} />
        Google Scholar
      </Link>
      <Link
        href="./cv"
        target="_blank"
        rel="noopener"
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#1976d2', fontWeight: 500, fontSize: '0.9rem' }}
      >
        <ArticleIcon sx={{ fontSize: 18 }} />
        CV
      </Link>
    </Stack>
  </Box>
)

/* ── Main App ── */
const App = () => {
  return (
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left sidebar */}
          <Box sx={{ width: { xs: '100%', md: 280 }, flexShrink: 0 }}>
            <Sidebar />
          </Box>

          {/* Right main content */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack spacing={5}>
              {/* Biography */}
              <Box>
                <Typography variant="h4" fontWeight={800} sx={{ mb: 2, pb: 1, borderBottom: '2px solid #333', color: '#111' }}>
                  Biography
                </Typography>
                <Stack spacing={1.5}>
                  {profile.bio.map(renderBioLine)}
                </Stack>
              </Box>

              {/* Publications */}
              <Box>
                <Typography variant="h4" fontWeight={800} sx={{ mb: 2, pb: 1, borderBottom: '2px solid #333', color: '#111' }}>
                  Publications
                </Typography>
                <Stack spacing={2}>
                  {publications.map((pub, i) => (
                    <PublicationCard key={i} pub={pub} />
                  ))}
                </Stack>
              </Box>

              {/* Experience */}
              <Box>
                <Typography variant="h4" fontWeight={800} sx={{ mb: 2, pb: 1, borderBottom: '2px solid #333', color: '#111' }}>
                  Education &amp; Experience
                </Typography>
                <Stack spacing={2}>
                  {experiences.map((exp, i) => (
                    <ExperienceCard key={i} exp={exp} />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default App
