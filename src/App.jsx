import React from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  Paper,
  Link,
  Avatar,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import { profile, publications, experiences } from "./data";
import avatarImg from "./assets/avatar.jpg";

const REL_EXTERNAL = "noopener noreferrer";

function useColors() {
  const theme = useTheme();
  return {
    bg: theme.palette.background.default,
    paper: theme.palette.background.paper,
    ink: theme.palette.text.primary,
    sub: theme.palette.text.secondary,
    muted: "#6f685d",
    red: theme.palette.primary.main,
    amber: theme.palette.secondary.main,
    gold: "#8b5e13",
    rule: theme.palette.text.primary,
    ruleLight: theme.palette.divider,
    cardBorder: "rgba(26, 26, 24, 0.14)",
    cardHover: "#fffaf5",
    glassBg: "rgba(250, 248, 244, 0.94)",
  };
}

function makeStyles(C) {
  return {
    card: {
      p: 2.5,
      bgcolor: C.glassBg,
      borderRadius: "16px",
      border: `1px solid ${C.cardBorder}`,
      boxShadow: "0 1px 3px rgba(26, 26, 24, 0.05), 0 1px 2px rgba(26, 26, 24, 0.03)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      position: "relative",
      "&:hover": {
        bgcolor: C.cardHover,
        borderColor: "rgba(190, 66, 43, 0.32)",
        boxShadow: "0 4px 12px rgba(26, 26, 24, 0.07), 0 2px 4px rgba(26, 26, 24, 0.04)",
        transform: "translateY(-1px)",
      },
    },
    sectionHeading: {
      color: C.ink,
      fontWeight: 700,
      fontSize: { xs: "1.1rem", md: "1.2rem" },
      letterSpacing: "-0.01em",
      mb: 2,
      pb: 1.2,
      borderBottom: `1.5px solid ${C.ruleLight}`,
    },
    tagPill: {
      display: "inline-block",
      fontSize: "0.7rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
      color: C.amber,
      bgcolor: "rgba(139, 94, 19, 0.10)",
      px: 1.2,
      py: 0.3,
      borderRadius: "8px",
      lineHeight: 1.5,
    },
  };
}

function iosBtn(color) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    px: 1.4,
    py: 0.5,
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.02em",
    textDecoration: "none",
    color,
    bgcolor: `${color}10`,
    border: "none",
    borderRadius: "10px",
    lineHeight: 1,
    transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "&:hover": {
      bgcolor: `${color}20`,
      transform: "scale(1.04)",
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  };
}

function parseBoldMarkdown(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function RenderBioLine({ item }) {
  const C = useColors();

  if (item.segments) {
    return (
      <Typography variant="body1" sx={{ lineHeight: 1.8, color: C.ink }}>
        {item.segments.map((seg, i) =>
          seg.link ? (
            <Link
              key={i}
              href={seg.url}
              target="_blank"
              rel={REL_EXTERNAL}
              underline="hover"
              sx={{ color: C.red, fontWeight: 600 }}
            >
              {seg.link}
            </Link>
          ) : (
            <span key={i}>{seg.text}</span>
          ),
        )}
      </Typography>
    );
  }
  if (item.link) {
    return (
      <Typography variant="body1" sx={{ lineHeight: 1.8, color: C.ink }}>
        {item.text}{" "}
        <Link
          href={item.link.url}
          target="_blank"
          rel={REL_EXTERNAL}
          underline="hover"
          sx={{ color: C.red, fontWeight: 600 }}
        >
          {item.link.label}
        </Link>
        {item.suffix}
      </Typography>
    );
  }
  return (
    <Typography variant="body1" sx={{ lineHeight: 1.8, color: C.ink }}>
      {parseBoldMarkdown(item.text)}
    </Typography>
  );
}

const PublicationCard = ({ pub }) => {
  const C = useColors();
  const styles = makeStyles(C);
  const cardLink = pub.home_page || pub.paper;

  const handleClick = (e) => {
    if (!cardLink) return;
    if (e.target.closest("a")) return;
    window.open(cardLink, "_blank", REL_EXTERNAL);
  };

  return (
    <Paper
      elevation={0}
      sx={{ ...styles.card, cursor: cardLink ? "pointer" : "default" }}
      onClick={handleClick}
      role={cardLink ? "link" : undefined}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom sx={{ lineHeight: 1.4, color: C.ink }}>
        {pub.title}
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ lineHeight: 1.7, color: C.sub, mt: 0.5 }}>
        {pub.authors.split(profile.name).flatMap((seg, i, arr) =>
          i < arr.length - 1
            ? [seg, <strong key={i} style={{ color: C.red }}>{profile.name}</strong>]
            : [seg],
        )}
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1.5 }}>
        <Box sx={styles.tagPill}>{pub.venue}</Box>
        <Stack direction="row" spacing={0.8}>
          {pub.home_page && (
            <Box
              component="a"
              href={pub.home_page}
              target="_blank"
              rel={REL_EXTERNAL}
              onClick={(e) => e.stopPropagation()}
              sx={iosBtn(C.red)}
            >
              <HomeIcon sx={{ fontSize: 14 }} />
              Project
            </Box>
          )}
          {pub.paper && (
            <Box
              component="a"
              href={pub.paper}
              target="_blank"
              rel={REL_EXTERNAL}
              onClick={(e) => e.stopPropagation()}
              sx={iosBtn(C.amber)}
            >
              <ArticleIcon sx={{ fontSize: 14 }} />
              Paper
            </Box>
          )}
          {pub.github && (
            <Box
              component="a"
              href={pub.github}
              target="_blank"
              rel={REL_EXTERNAL}
              onClick={(e) => e.stopPropagation()}
              sx={iosBtn(C.ink)}
            >
              <GitHubIcon sx={{ fontSize: 14 }} />
              Code
            </Box>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
};

const ExperienceCard = ({ exp }) => {
  const C = useColors();
  const styles = makeStyles(C);

  return (
    <Paper elevation={0} sx={styles.card}>
      <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 0.5 }}>
        <Typography variant="body1" fontWeight={700} sx={{ color: C.ink }}>
          {exp.role}
        </Typography>
        <Typography variant="body2" sx={{ flexShrink: 0, ml: 2, color: C.muted, fontWeight: 500 }}>
          {exp.period}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 0.5 }}>
        <Link
          variant="body1"
          href={exp.institutionUrl}
          target="_blank"
          rel={REL_EXTERNAL}
          underline="hover"
          sx={{ fontWeight: 600, color: C.red }}
        >
          {exp.institution}
        </Link>
        <Typography variant="body2" sx={{ flexShrink: 0, ml: 2, color: C.muted }}>
          {exp.location}
        </Typography>
      </Stack>
      <Typography variant="body2" sx={{ color: C.sub, mt: 0.5 }}>
        {exp.note}
      </Typography>
    </Paper>
  );
};

const Sidebar = () => {
  const C = useColors();

  return (
    <Box sx={{ position: { md: "sticky" }, top: { md: 48 } }}>
      <Box
        sx={{
          width: 180,
          height: 180,
          mb: 2.5,
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(26, 26, 24, 0.08)",
        }}
      >
        <Avatar
          src={avatarImg}
          alt={profile.name}
          variant="square"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Typography variant="h4" fontWeight={700} sx={{ color: C.ink }}>
        {profile.name}
      </Typography>

      <Stack spacing={0.3} sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ color: C.sub }}>{profile.title}</Typography>
        <Typography variant="body2" sx={{ color: C.sub }}>{profile.affiliation}</Typography>
        <Typography variant="body2" sx={{ color: C.sub }}>{profile.location}</Typography>
      </Stack>

      <Box sx={{ my: 2.5, height: "1px", bgcolor: C.ruleLight }} />

      <Typography
        variant="body2"
        sx={{ fontWeight: 650, letterSpacing: "-0.01em", color: C.red, mb: 0.8 }}
      >
        Research
      </Typography>
      <Typography variant="body2" sx={{ color: C.sub, lineHeight: 1.7 }}>
        {profile.researchInterests}
      </Typography>

      <Box sx={{ my: 2.5, height: "1px", bgcolor: C.ruleLight }} />

      <Typography
        variant="body2"
        sx={{ fontWeight: 650, letterSpacing: "-0.01em", color: C.red, mb: 1.2 }}
      >
        Links
      </Typography>
      <Stack spacing={1}>
        {[
          { href: `mailto:${profile.email}`, icon: <EmailIcon sx={{ fontSize: 17 }} />, label: "Email" },
          { href: profile.github, icon: <GitHubIcon sx={{ fontSize: 17 }} />, label: "GitHub", ext: true },
          { href: profile.googleScholar, icon: <SchoolIcon sx={{ fontSize: 17 }} />, label: "Google Scholar", ext: true },
        ].map(({ href, icon, label, ext }) => (
          <Link
            key={label}
            href={href}
            {...(ext ? { target: "_blank", rel: REL_EXTERNAL } : {})}
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              color: C.ink,
              fontWeight: 500,
              fontSize: "0.88rem",
              transition: "color 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              "&:hover": { color: C.red },
            }}
          >
            {icon}
            {label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

const App = () => {
  const C = useColors();
  const styles = makeStyles(C);

  return (
    <Box sx={{ bgcolor: C.bg, minHeight: "100vh" }}>
      <Box
        sx={{
          height: "3px",
          background: `linear-gradient(90deg, ${C.red}, ${C.amber})`,
          borderRadius: "0 0 2px 2px",
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: 260 }, flexShrink: 0 }}>
            <Sidebar />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "1px",
              bgcolor: C.ruleLight,
              flexShrink: 0,
            }}
          />

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack spacing={5}>
              <Box>
                <Typography variant="h5" sx={styles.sectionHeading}>
                  Biography
                </Typography>
                <Stack spacing={1.5}>
                  {profile.bio.map((item, idx) => (
                    <RenderBioLine key={idx} item={item} />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="h5" sx={styles.sectionHeading}>
                  Publications & Research
                </Typography>
                <Stack spacing={1.5}>
                  {publications.map((pub) => (
                    <PublicationCard key={pub.title} pub={pub} />
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography variant="h5" sx={styles.sectionHeading}>
                  Education & Experience
                </Typography>
                <Stack spacing={1.5}>
                  {experiences.map((exp) => (
                    <ExperienceCard key={`${exp.role}-${exp.period}`} exp={exp} />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Box sx={{ borderTop: `1px solid ${C.ruleLight}`, py: 2.5, mt: 4 }}>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: C.muted, letterSpacing: "0.01em", fontSize: "0.78rem" }}
        >
          &copy; {new Date().getFullYear()} {profile.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
