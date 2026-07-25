import { useState, useRef, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../../config/global";
import { useAuth } from "../../context/Auth";


const TESTIMONIALS = [
    {
        text: "TaskFlow Pro transitioned our workflow from chaotic to cosmic precision in under a week.",
        author: "Elena Rodriguez",
        role: "CTO @ NexaFlow",
    },
    {
        text: "The glassmorphic interface isn't just eye candy—it's a high-performance workspace that fuels focus.",
        author: "Julian Vane",
        role: "Product Designer @ Ether",
    },
    {
        text: "Finally, a task manager that keeps pace with elite developer velocity. Absolute game changer.",
        author: "Marcus Thorne",
        role: "Lead Dev @ Chronos",
    },
];

function ShaderCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        function syncSize() {
            const w = canvas.clientWidth || 1280;
            const h = canvas.clientHeight || 720;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
        }

        let resizeObserver;
        if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(syncSize);
            resizeObserver.observe(canvas);
        }
        syncSize();

        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) return;

        const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
        const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
 
float grid(vec2 uv, float res) {
    vec2 grid = fract(uv * res);
    return 1.0 - smoothstep(0.0, 0.05, min(grid.x, grid.y));
}
 
void main() {
    vec2 uv = v_texCoord;
    vec2 center = uv - 0.5;
    center.x *= u_resolution.x / u_resolution.y;
 
    float pulse = 0.5 + 0.5 * sin(u_time * 0.5);
 
    float lines = grid(uv + vec2(0.0, u_time * 0.05), 10.0);
    lines += grid(uv - vec2(u_time * 0.02, 0.0), 20.0) * 0.5;
 
    vec3 color1 = vec3(0.388, 0.4, 0.945);
    vec3 color2 = vec3(0.925, 0.282, 0.6);
    vec3 finalColor = mix(color1, color2, uv.x + sin(u_time * 0.2) * 0.2);
 
    float mask = smoothstep(0.8, 0.2, length(center));
    gl_FragColor = vec4(finalColor * lines * mask * pulse, mask * 0.3);
}`;

        function cs(type, src) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }

        const prog = gl.createProgram();
        gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
        gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        const posLoc = gl.getAttribLocation(prog, "a_position");
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        const uTime = gl.getUniformLocation(prog, "u_time");
        const uRes = gl.getUniformLocation(prog, "u_resolution");
        const uMouse = gl.getUniformLocation(prog, "u_mouse");

        let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

        function onMouseMove(event) {
            const rect = canvas.getBoundingClientRect();
            if (rect.width && rect.height) {
                const nx = (event.clientX - rect.left) / rect.width;
                const ny = 1.0 - (event.clientY - rect.top) / rect.height;
                mouse.x = nx * canvas.width;
                mouse.y = ny * canvas.height;
            }
        }
        window.addEventListener("mousemove", onMouseMove);

        let rafId;
        function render(t) {
            if (typeof ResizeObserver === "undefined") syncSize();
            gl.viewport(0, 0, canvas.width, canvas.height);
            if (uTime) gl.uniform1f(uTime, t * 0.001);
            if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
            if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            rafId = requestAnimationFrame(render);
        }
        rafId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", onMouseMove);
            if (resizeObserver) resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full" style={{ display: "block" }}>
            <canvas
                id="shader-canvas-ANIMATION_9"
                ref={canvasRef}
                style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
    );
}

const initialState = {
    email: "",
    password: "",
};

function Login() {

    const navigate = useNavigate();

    const { userLogin, user } = useAuth();

    const [form, setForm] = useState(initialState);

    const handleChange = e => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [testimonialVisible, setTestimonialVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialVisible(false);
            setTimeout(() => {
                setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
                setTestimonialVisible(true);
            }, 300);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const testimonial = TESTIMONIALS[testimonialIndex];

    // ===== Password visibility =====
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePassword = () => setPasswordVisible((prev) => !prev);

    // ===== Form state =====
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalScaled, setModalScaled] = useState(false);

    // ===== Login submit =====
    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        // setIsSubmitting(true);

        if (!form.email || !form.password) {
            return toast.error("All fields are required");
        };

        if (!isValidEmail(form.email)) {
            return toast.error("Please enter a valid email address");
        };

        if (form.password.length < 6) {
            return toast.error("Password must be at least 6 characters long");
        };

        try {

            const data = await userLogin(form);

            if (data?.success) {
                setTimeout(() => {
                    setShowModal(true);
                    requestAnimationFrame(() => setModalScaled(true));
                }, 1200);
                setTimeout(() => {
                    setIsSubmitting(false);
                    setShowModal(false);
                    navigate("/dashboard");
                }, 4000);
            };

        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
            setShowModal(false);
        };
    }, [form]);

    return (
        <>
            <section className='font-body-md text-body-md antialiased selection:bg-primary/30'>
                <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
                    {/* Left Pane: Ambient Showpiece */}
                    <section className="relative w-full md:w-1/2 min-h-[409px] md:min-h-screen flex items-center justify-center p-gutter overflow-hidden">
                        <ShaderCanvas />
                        <div className="relative z-10 w-full max-w-lg space-y-stack-lg">
                            <header className="space-y-stack-xs text-center md:text-left">
                                <h1 className="font-headline-xl !text-headline-xl accent-gradients tracking-tight">
                                    Organize.<br />Accelerate.<br />Automate.
                                </h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                                    The elite productivity OS for hyper-growth teams and solo innovators.
                                </p>
                            </header>

                            {/* Testimonial Carousel */}
                            <div
                                className="glass-card p-stack-md rounded-2xl transition-all duration-500 hover:scale-[1.01] cursor-default"
                                id="testimonial-carousel"
                            >
                                <div className="flex items-center gap-stack-xs mb-stack-xs">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-[18px]">format_quote</span>
                                    </div>
                                    <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                                        Ecosystem Feedback
                                    </span>
                                </div>
                                <p
                                    className="italic text-on-surface min-h-[60px] transition-opacity duration-300"
                                    id="testimonial-text"
                                    style={{ opacity: testimonialVisible ? 1 : 0 }}
                                >
                                    "{testimonial.text}"
                                </p>
                                <div className="mt-stack-md flex items-center gap-stack-sm">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="A professional headshot of a female tech lead with soft neon lighting in a high-tech obsidian office setting, wearing designer glasses, looking confident and calm, 8k resolution, cinematic lighting."
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClsHqObj7piudyXc5-FZW4YnLh8JxfOVrZjAZ-MAtN818vEwrdD5dybiqYDLmr-vwz1PG6F7xALMNl3NpRTUX0SmymWaNpswiAPkm9MsUd2bayWAiox65_iuJR9xNsFJJD1ekm3BihaaQfzkvP1PD5_ETn4O4_eIz6yQ6Z9tdGQiwGXY_HNypj41o1kKFzv7az_PIH7Oq8KljV8ZCXI7Sc3gmktksiaGGZdwwigT6gRlggz4uRetrx"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-label-md text-label-md font-bold" id="testimonial-author">
                                            {testimonial.author}
                                        </p>
                                        <p
                                            className="text-[10px] text-on-surface-variant uppercase tracking-tighter"
                                            id="testimonial-role"
                                        >
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Right Pane: Auth Terminal */}
                    <section className="relative w-full md:w-1/2 flex items-center justify-center p-gutter bg-[#07080E] z-20">
                        {/* Login Card */}
                        <div className="w-full max-w-md glass-card p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="mb-stack-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-primary">bolt</span>
                                    <span className="font-headline-md text-headline-md font-bold text-primary">TaskFlow Pro</span>
                                </div>
                                <p className="text-on-surface-variant font-body-sm text-body-sm">Access the high-performance workspace.</p>
                            </div>

                            {/* Speedrun Demo Buttons */}
                            <form className="space-y-6" id="login-form" onSubmit={handleLogin}>
                                {/* Email */}
                                <div className="relative floating-label-input group">
                                    <input
                                        className="w-full !bg-surface-container-highest rounded-md border-b-2 border-outline-variant text-on-surface py-3 px-1 focus:outline-none focus:border-primary transition-all placeholder-transparent"
                                        id="email"
                                        placeholder=" "
                                        required
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        type="email"
                                    />
                                    <label className="absolute left-1 top-3 text-on-surface-variant pointer-events-none transition-all duration-300" htmlFor="email">
                                        Email Address
                                    </label>
                                </div>

                                {/* Password */}
                                <div className="relative floating-label-input group">
                                    <input
                                        className="w-full !bg-surface-container-highest rounded-md border-b-2 border-outline-variant text-on-surface py-3 px-1 focus:outline-none focus:border-primary transition-all placeholder-transparent"
                                        id="password"
                                        placeholder=" "
                                        required
                                        name="password"
                                        value={form.password}
                                        type={passwordVisible ? "text" : "password"}
                                        onChange={handleChange}
                                    />
                                    <label className="absolute left-1 top-3 text-on-surface-variant pointer-events-none transition-all duration-300" htmlFor="password">
                                        Security Key
                                    </label>
                                    <button
                                        className="absolute right-1 top-3 text-on-surface-variant hover:text-primary transition-colors"
                                        onClick={togglePassword}
                                        type="button"
                                    >
                                        <span className="material-symbols-outlined text-[20px]" id="pass-visibility-icon">
                                            {passwordVisible ? "visibility_off" : "visibility"}
                                        </span>
                                    </button>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input
                                                className="peer appearance-none w-5 h-5 rounded border-2 border-outline-variant checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                                type="checkbox"
                                            />
                                            <span className="material-symbols-outlined absolute opacity-0 peer-checked:opacity-100 text-[#07006c] text-[16px] left-0.5 select-none transition-opacity">
                                                check
                                            </span>
                                        </div>
                                        <span className="text-label-md font-label-md text-on-surface-variant group-hover:text-on-surface transition-colors">Remember Node</span>
                                    </label>
                                    <a className="text-label-md font-label-md text-primary hover:underline transition-all" href="#">Recover Access</a>
                                </div>

                                {/* Submit */}
                                <button
                                    className="w-full btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all group"
                                    id="submit-btn"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    <span id="btn-label">{isSubmitting ? "Authenticating..." : "Initialize Session"}</span>
                                    <div className={`loading-ring ${isSubmitting ? "" : "hidden"}`} id="btn-spinner"></div>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </form>

                            <footer className="mt-8 text-center">
                                <p className="text-body-sm font-body-sm text-on-surface-variant">
                                    New entity?<Link to="/auth/register"> <a className="text-primary font-bold hover:underline">Deploy Account</a></Link>
                                </p>
                            </footer>
                        </div>
                    </section>
                </main>

                {/* Success Modal Overlay */}
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 success-overlay ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    id="success-modal"
                >
                    <div
                        className={`text-center space-y-stack-md transform transition-transform duration-700 ${modalScaled ? "scale-100" : "scale-90"
                            }`}
                        id="modal-content"
                    >
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(192,193,255,0.4)]">
                            <span className="material-symbols-outlined text-[48px] text-[#07006c]">verified</span>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-headline-lg text-headline-lg text-primary">Validation Successful</h2>
                            <p className="text-on-surface-variant font-body-lg">Welcome Back, Architect. Accessing terminal...</p>
                        </div>
                        <div className="w-64 h-1 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
                            <div
                                className="h-full bg-primary w-full"
                                style={{ animation: showModal ? "progress 1.5s ease-in-out forwards" : "none" }}
                            ></div>
                        </div>
                    </div>
                </div>

                <style>{`
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
            </section>
        </>
    )
}

export default Login