# Build stage
FROM rust:latest as builder
WORKDIR /app
COPY server-rust/Cargo.toml server-rust/Cargo.lock ./
COPY server-rust/src ./src
RUN cargo build --release

# Runner stage
FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=builder /app/target/release/pdaeh-advisor-server /usr/local/bin/
COPY agente-pdaeh-consultor /app/agente-pdaeh-consultor
COPY advisor-web /app/advisor-web

ENV PORT=8080
ENV PDAEH_ROOT=/app
EXPOSE 8080

CMD ["pdaeh-advisor-server"]
