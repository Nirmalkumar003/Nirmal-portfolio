
import "./ParticleBackground.css";

function ParticleBackground() {
    const particles = Array.from({ length: 65 }, (_, index) => ({
        id: index,
        left: `${(index * 37 + 13) % 100}%`,
        top: `${(index * 53 + 7) % 100}%`,
        size: `${2 + (index % 3)}px`,
        duration: `${7 + (index % 8)}s`,
        delay: `${-(index % 10)}s`,
    }));

    return (
        <div className="particle-background" aria-hidden="true">
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="floating-particle"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                        animationDuration: particle.duration,
                        animationDelay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
}

export default ParticleBackground;
