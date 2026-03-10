import React from 'react'
import { Container, Stack, Box, Typography, Paper, Link, IconButton, Tooltip } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import SchoolIcon from '@mui/icons-material/School'
import ArticleIcon from '@mui/icons-material/Article'
import HomeIcon from '@mui/icons-material/Home'
import { profile, publications, experiences } from './data'

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
        <Link href={item.link.url} target="_blank" rel="noopener" underline="hover" sx={{ color: '#1976d2', fontWeight: 500 }}>
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

const PublicationCard = ({ pub, index }) => (
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

const App = () => {
  return (
    <Box sx={{ bgcolor: '#f4f5f6', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Stack spacing={5}>
          {/* Header */}
          <Box>
            <Typography variant="h2" fontWeight={800} sx={{ letterSpacing: '-0.02em', color: '#111' }}>
              {profile.name}
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
              <Link
                href={`mailto:${profile.email}`}
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#1976d2', fontWeight: 500 }}
              >
                <EmailIcon sx={{ fontSize: 20 }} />
                Email
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener"
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#1976d2', fontWeight: 500 }}
              >
                <GitHubIcon sx={{ fontSize: 20 }} />
                GitHub
              </Link>
              <Link
                href={profile.googleScholar}
                target="_blank"
                rel="noopener"
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#1976d2', fontWeight: 500 }}
              >
                <SchoolIcon sx={{ fontSize: 20 }} />
                Google Scholar
              </Link>
            </Stack>
          </Box>

          {/* Bio */}
          <Stack spacing={2}>{profile.bio.map(renderBioLine)}</Stack>

          {/* Publications */}
          <Box>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 2, pb: 1, borderBottom: '1px solid #eaeaea', color: '#111' }}>
              Publications
            </Typography>
            <Stack spacing={2}>
              {publications.map((pub, i) => (
                <PublicationCard key={i} pub={pub} index={i} />
              ))}
            </Stack>
          </Box>

          {/* Experience */}
          <Box>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 2, pb: 1, borderBottom: '1px solid #eaeaea', color: '#111' }}>
              Experience
            </Typography>
            <Stack spacing={2}>
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
