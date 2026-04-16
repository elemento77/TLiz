-- Depoimentos: tira o acesso de “admin” para qualquer um e limita o gerenciamento à conta autenticada certa.
--
-- Antes de rodar este SQL:
-- 1. No Supabase: Authentication → (opcional) desligue cadastro público se só você/Liz forem usar.
-- 2. Crie o usuário (Add user) com o mesmo e-mail que está nas políticas abaixo e com a senha desejada.
-- 3. O e-mail nas políticas, o usuário no Auth e o secret VITE_ADMIN_EMAIL no GitHub precisam ser iguais.
-- 4. Authentication → URL Configuration → coloque Site URL e Redirect URLs, por exemplo:
--    https://elemento77.github.io/TLiz/

DROP POLICY IF EXISTS "Allow admin all" ON testimonials;

-- Só quem está logado com este e-mail pode ver pendentes/rejeitados e alterar ou apagar linhas.
CREATE POLICY "Admin testimonials select all"
ON testimonials FOR SELECT
TO authenticated
USING (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'));

CREATE POLICY "Admin testimonials update"
ON testimonials FOR UPDATE
TO authenticated
USING (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'))
WITH CHECK (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'));

CREATE POLICY "Admin testimonials delete"
ON testimonials FOR DELETE
TO authenticated
USING (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'));
